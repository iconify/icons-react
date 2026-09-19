import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z6j6pfbcf.css';
import '../../css/u/uzhnzhb4n.css';
import '../../css/l/lstalfb9c.css';

const viewBox = {"width":301,"height":191};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z6j6pfbcf"/><path class="uzhnzhb4n"/><path class="lstalfb9c"/></g>`,
		"fallback": "cif:ee",
	});
}

export default Component;
