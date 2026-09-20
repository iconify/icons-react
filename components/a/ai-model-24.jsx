import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vw6cgiv-a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vw6cgiv-a"/>`,
		"fallback": "octicon:ai-model-24",
	});
}

export default Component;
