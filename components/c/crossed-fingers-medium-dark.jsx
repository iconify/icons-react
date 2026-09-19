import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u4f24llmo.css';
import '../../css/b/b-7j4db8u.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u4f24llmo"/><path class="b-7j4db8u"/></g>`,
		"fallback": "fluent-emoji-flat:crossed-fingers-medium-dark",
	});
}

export default Component;
