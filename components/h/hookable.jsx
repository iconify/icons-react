import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bs6ijty_d.css';
import '../../css/m/ml1qkfb8j.css';
import '../../css/b/bhfm3fbyt.css';
import '../../css/o/ozd1vo8_l.css';
import '../../css/m/mq6b24bgp.css';
import '../../css/e/eon-6iwgl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bs6ijty_d"/><path class="ml1qkfb8j"/><path class="bhfm3fbyt"/><path class="ozd1vo8_l"/><path class="mq6b24bgp"/><path class="eon-6iwgl"/></g>`,
		"fallback": "unjs:hookable",
	});
}

export default Component;
