import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b78-uobgs.css';
import '../../css/e/eqms1ckur.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b78-uobgs"/><path class="eqms1ckur"/>`,
		"fallback": "carbon:earth-southeast-asia",
	});
}

export default Component;
