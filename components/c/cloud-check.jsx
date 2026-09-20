import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a6pp--cit.css';
import '../../css/s/swiit8b3i.css';
import '../../css/r/rjgpapbik.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a6pp--cit"/><path class="swiit8b3i"/><path class="rjgpapbik"/></g>`,
		"fallback": "streamline-color:cloud-check",
	});
}

export default Component;
