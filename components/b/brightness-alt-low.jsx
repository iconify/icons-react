import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jeks_sl8x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jeks_sl8x"/>`,
		"fallback": "bi:brightness-alt-low",
	});
}

export default Component;
