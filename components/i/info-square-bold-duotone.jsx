import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pv_hji6de.css';
import '../../css/e/epahso09d.css';
import '../../css/g/g2-dgp5yi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pv_hji6de"/><path class="epahso09d"/><path class="g2-dgp5yi"/>`,
		"fallback": "solar:info-square-bold-duotone",
	});
}

export default Component;
