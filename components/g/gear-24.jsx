import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q6wgzy02y.css';
import '../../css/r/rhjnb0hvn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q6wgzy02y"/><path class="rhjnb0hvn"/>`,
		"fallback": "octicon:gear-24",
	});
}

export default Component;
