import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wk35-2nek.css';
import '../../css/k/k3a7cdcqq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wk35-2nek"/><path class="k3a7cdcqq"/></g>`,
		"fallback": "fluent-emoji-flat:flexed-biceps",
	});
}

export default Component;
