import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gfrji3bgb.css';
import '../../css/i/ir-23urhq.css';
import '../../css/u/u3cr9i50k.css';
import '../../css/q/qw54yxxxh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gfrji3bgb"/><path clip-rule="evenodd" class="ir-23urhq"/><path clip-rule="evenodd" class="u3cr9i50k"/><path class="qw54yxxxh"/></g>`,
		"fallback": "fluent-emoji-flat:hamsa",
	});
}

export default Component;
