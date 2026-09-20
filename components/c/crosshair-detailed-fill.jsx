import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aqlhhob6j.css';
import '../../css/w/wueuzxb4n.css';
import '../../css/e/ez5-y3bju.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aqlhhob6j"/><path clip-rule="evenodd" class="wueuzxb4n"/><path class="ez5-y3bju"/>`,
		"fallback": "si:crosshair-detailed-fill",
	});
}

export default Component;
