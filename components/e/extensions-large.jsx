import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/si18as_vc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="si18as_vc"/>`,
		"fallback": "codicon:extensions-large",
	});
}

export default Component;
