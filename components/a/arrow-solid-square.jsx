import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e7qalcvkx.css';
import '../../css/m/me_9c89nm.css';
import '../../css/f/fmkrf-bca.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="e7qalcvkx"/><path clip-rule="evenodd" class="me_9c89nm"/><path class="fmkrf-bca"/></g>`,
		"fallback": "glyphs-poly:arrow-solid-square",
	});
}

export default Component;
