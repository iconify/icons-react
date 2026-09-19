import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hpxcr_mnx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hpxcr_mnx"/>`,
		"fallback": "entypo:flower",
	});
}

export default Component;
