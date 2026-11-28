import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zfamr8bkm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zfamr8bkm"/>`,
		"fallback": "noviair-light:fingerprint",
	});
}

export default Component;
