import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qwfjr6b6d.css';
import '../../css/h/hpgzo8ysi.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qwfjr6b6d"/><path class="hpgzo8ysi"/></g>`,
		"fallback": "fluent-emoji-flat:hand-with-fingers-splayed-medium-dark",
	});
}

export default Component;
