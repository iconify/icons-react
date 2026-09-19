import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eicj9yfem.css';
import '../../css/s/saaasnbog.css';
import '../../css/v/vkrf29blp.css';
import '../../css/v/vlthu3b0y.css';
import '../../css/d/d4xlv1bjz.css';
import '../../css/d/dgncnkkqr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="eicj9yfem"/><path class="saaasnbog"/><path class="vkrf29blp"/><path class="vlthu3b0y"/><path class="d4xlv1bjz"/><path class="dgncnkkqr"/></g>`,
		"fallback": "fluent-emoji-flat:dog",
	});
}

export default Component;
