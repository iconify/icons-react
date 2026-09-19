import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mjouo0b7m.css';
import '../../css/a/axbcl0bar.css';
import '../../css/e/e1b0znbyt.css';
import '../../css/w/w4t3vvb2y.css';
import '../../css/g/g1zhksbno.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mjouo0b7m"/><path class="axbcl0bar"/><path class="e1b0znbyt"/><path class="w4t3vvb2y"/><path class="g1zhksbno"/></g>`,
		"fallback": "fluent-emoji-flat:aerial-tramway",
	});
}

export default Component;
