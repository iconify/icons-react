import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mtoyfe4sg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mtoyfe4sg"/>`,
		"fallback": "entypo:chevron-with-circle-right",
	});
}

export default Component;
