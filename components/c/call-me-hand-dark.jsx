import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lfor--bxs.css';
import '../../css/t/t_b5cdcfj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lfor--bxs"/><path class="t_b5cdcfj"/></g>`,
		"fallback": "fluent-emoji-flat:call-me-hand-dark",
	});
}

export default Component;
