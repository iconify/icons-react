import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yurrk1b6b.css';
import '../../css/l/l1cht4bmu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yurrk1b6b"/><path class="l1cht4bmu"/></g>`,
		"fallback": "fluent-emoji-flat:hand-with-fingers-splayed",
	});
}

export default Component;
