import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e50c8gb5g.css';
import '../../css/u/ut5kjkb9c.css';
import '../../css/m/mry1nj2og.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e50c8gb5g"/><path class="ut5kjkb9c"/><path class="mry1nj2og"/>`,
		"fallback": "gcp:binary-authorization",
	});
}

export default Component;
