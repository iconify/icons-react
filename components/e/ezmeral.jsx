import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lityu_b8n.css';

const viewBox = {"width":48,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lityu_b8n"/>`,
		"fallback": "grommet-icons:ezmeral",
	});
}

export default Component;
