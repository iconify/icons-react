import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i_2newb8p.css';

const viewBox = {"width":40,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i_2newb8p"/>`,
		"fallback": "nrk:arrow-left-long-expressive",
	});
}

export default Component;
