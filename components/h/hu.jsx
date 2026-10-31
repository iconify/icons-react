import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rbjuqnb5d.css';
import '../../css/b/bc4gh5bbk.css';
import '../../css/u/us5hpdniu.css';

const viewBox = {"width":301,"height":151};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rbjuqnb5d"/><path class="bc4gh5bbk"/><path class="us5hpdniu"/></g>`,
		"fallback": "cif:hu",
	});
}

export default Component;
