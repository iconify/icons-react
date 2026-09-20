import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/apmc5o1cw.css';
import '../../css/g/grf9bz7uq.css';
import '../../css/l/lb80qlbob.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGEvIS1dWq" class="apmc5o1cw"/></defs><use href="#SVGEvIS1dWq" class="grf9bz7uq"/><use href="#SVGEvIS1dWq" class="lb80qlbob"/>`,
		"fallback": "openmoji:antenna-bars",
	});
}

export default Component;
