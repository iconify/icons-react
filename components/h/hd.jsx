import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fnu9rbbvf.css';
import '../../css/h/hezf90bhg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fnu9rbbvf"/><path class="hezf90bhg"/>`,
		"fallback": "cil:hd",
	});
}

export default Component;
