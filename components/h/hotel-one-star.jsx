import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dhfnag4fo.css';
import '../../css/j/jf_n9nnmg.css';
import '../../css/b/bf0z8j98s.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dhfnag4fo"/><path class="jf_n9nnmg"/><path class="bf0z8j98s"/></g>`,
		"fallback": "streamline-color:hotel-one-star",
	});
}

export default Component;
