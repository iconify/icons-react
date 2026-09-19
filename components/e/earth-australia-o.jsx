import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wz1up0bnk.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wz1up0bnk"/>`,
		"fallback": "gis:earth-australia-o",
	});
}

export default Component;
