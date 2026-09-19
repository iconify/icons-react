import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oa-a1_bto.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oa-a1_bto"/>`,
		"fallback": "gis:earth-net",
	});
}

export default Component;
