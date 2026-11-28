import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z-npqhtiq.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/bqp9_pbag.css';
import '../../css/n/n315fvb-u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary z-npqhtiq"/><g class="dt0cm9dhy primary"><path class="bqp9_pbag"/><path class="n315fvb-u"/></g>`,
		"fallback": "iconaut:hourglass-duo",
	});
}

export default Component;
