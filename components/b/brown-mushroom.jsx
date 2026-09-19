import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bsz2-vbnp.css';
import '../../css/c/cju8e-bhj.css';
import '../../css/v/vm24_-b9n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bsz2-vbnp"/><path class="cju8e-bhj"/><ellipse transform="rotate(30 20.28 7.436)" class="vm24_-b9n"/></g>`,
		"fallback": "fluent-emoji-flat:brown-mushroom",
	});
}

export default Component;
