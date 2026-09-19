import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fdi7snbrf.css';
import '../../css/v/vl3tn6krq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fdi7snbrf"/><path class="vl3tn6krq"/></g>`,
		"fallback": "fluent-emoji-flat:hiking-boot",
	});
}

export default Component;
