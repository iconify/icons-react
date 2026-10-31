import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/b/b3w0adc3y.css';
import '../../css/h/hh62rlb-m.css';
import '../../css/d/dqvt27bhn.css';
import '../../css/h/hlaue6blu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="b3w0adc3y wm-shadow"/><path class="hh62rlb-m wm-shadow"/><path class="dqvt27bhn"/><path class="hlaue6blu"/></g>`,
		"fallback": "withicons-brutal:alert-triangle",
	});
}

export default Component;
