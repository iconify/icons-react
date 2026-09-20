import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rig2rlqlf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rig2rlqlf"/>`,
		"fallback": "uiw:copy",
	});
}

export default Component;
