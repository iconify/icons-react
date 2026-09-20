import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rig-ls45m.css';

const viewBox = {"width":1545,"height":1544};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rig-ls45m"/>`,
		"fallback": "thesvg-color:gevernova-dark",
	});
}

export default Component;
