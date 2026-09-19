import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o69gdcw9k.css';
import '../../css/b/bkyqy-baq.css';
import '../../css/e/e-p0zm_dz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o69gdcw9k"/><circle class="bkyqy-baq"/><path class="e-p0zm_dz"/>`,
		"fallback": "bx:bx-mobile-vibration",
	});
}

export default Component;
