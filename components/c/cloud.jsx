import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zt5bmx3ap.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zt5bmx3ap"/>`,
		"fallback": "entypo:cloud",
	});
}

export default Component;
