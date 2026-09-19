import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xoy6yv3cj.css';
import '../../css/y/yef4huqia.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xoy6yv3cj"/><path class="yef4huqia"/>`,
		"fallback": "fxemoji:blackfolder",
	});
}

export default Component;
