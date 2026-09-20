import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hzd1uqbmr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hzd1uqbmr"/>`,
		"fallback": "ri:css3-line",
	});
}

export default Component;
