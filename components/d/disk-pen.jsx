import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hq3zmtb2k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hq3zmtb2k"/>`,
		"fallback": "ix:disk-pen",
	});
}

export default Component;
