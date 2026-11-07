import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/epahso09d.css';
import '../../css/g/g2-dgp5yi.css';
import '../../css/f/fhxzx1b_j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="epahso09d"/><path class="g2-dgp5yi"/><path clip-rule="evenodd" class="fhxzx1b_j"/>`,
		"fallback": "solar:info-circle-outline",
	});
}

export default Component;
