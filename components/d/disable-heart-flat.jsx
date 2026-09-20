import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hsaewqbwt.css';
import '../../css/y/ypaoktbzr.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hsaewqbwt"/><path clip-rule="evenodd" class="ypaoktbzr"/></g>`,
		"fallback": "streamline-color:disable-heart-flat",
	});
}

export default Component;
