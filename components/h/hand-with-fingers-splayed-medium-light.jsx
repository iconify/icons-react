import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/anhsk1-os.css';
import '../../css/d/dczm3hvog.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="anhsk1-os"/><path class="dczm3hvog"/></g>`,
		"fallback": "fluent-emoji-flat:hand-with-fingers-splayed-medium-light",
	});
}

export default Component;
