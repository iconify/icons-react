import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zr9_b0wqd.css';
import '../../css/s/skfqu9agk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zr9_b0wqd"/><path class="skfqu9agk"/></g>`,
		"fallback": "fluent-emoji-flat:circled-m",
	});
}

export default Component;
