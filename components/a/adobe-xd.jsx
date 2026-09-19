import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gej5qbeik.css';
import '../../css/w/w76yeublj.css';
import '../../css/z/zxu7hye5x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gej5qbeik"><path class="w76yeublj"/><path class="zxu7hye5x"/></g>`,
		"fallback": "catppuccin:adobe-xd",
	});
}

export default Component;
