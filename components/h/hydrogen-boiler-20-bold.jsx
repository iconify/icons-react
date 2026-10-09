import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cvjobubeq.css';
import '../../css/x/xcsol3bre.css';
import '../../css/s/swiwxvzfz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cvjobubeq"/><path class="xcsol3bre"/><path class="swiwxvzfz"/>`,
		"fallback": "energy-icons:hydrogen-boiler-20-bold",
	});
}

export default Component;
