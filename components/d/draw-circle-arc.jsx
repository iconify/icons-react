import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jh8ym9dvi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jh8ym9dvi"/>`,
		"fallback": "ix:draw-circle-arc",
	});
}

export default Component;
