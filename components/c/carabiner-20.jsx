import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rwfalccns.css';
import '../../css/v/v4w_f_aee.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rwfalccns"/><path class="v4w_f_aee"/>`,
		"fallback": "energy-icons:carabiner-20",
	});
}

export default Component;
