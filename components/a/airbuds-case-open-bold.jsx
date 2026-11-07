import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i5kir0bfd.css';
import '../../css/e/ej-mtxbbv.css';
import '../../css/r/r__f3wn0s.css';
import '../../css/t/tpa5nbb8v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i5kir0bfd"/><path class="ej-mtxbbv"/><path class="r__f3wn0s"/><path class="tpa5nbb8v"/>`,
		"fallback": "solar:airbuds-case-open-bold",
	});
}

export default Component;
