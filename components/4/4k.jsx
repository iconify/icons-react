import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/izq05d10w.css';
import '../../css/h/hezf90bhg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="izq05d10w"/><path class="hezf90bhg"/>`,
		"fallback": "cil:4k",
	});
}

export default Component;
