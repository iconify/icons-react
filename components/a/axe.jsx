import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h8ccp12wz.css';
import '../../css/n/nzx_vzkit.css';
import '../../css/e/e-u7_pwmo.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h8ccp12wz"/><path class="nzx_vzkit"/><path class="e-u7_pwmo"/></g>`,
		"fallback": "fluent-emoji-flat:axe",
	});
}

export default Component;
