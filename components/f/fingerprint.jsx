import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g5nye4bwu.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g5nye4bwu"/>`,
		"fallback": "picon:fingerprint",
	});
}

export default Component;
