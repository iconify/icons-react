import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gj14bacvx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gj14bacvx"/>`,
		"fallback": "coolicons:grid-alt-fill-round",
	});
}

export default Component;
