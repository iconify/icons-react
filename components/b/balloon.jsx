import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/m/m6tsdsbqn.css';
import '../../css/x/x8_7s2bbc.css';
import '../../css/q/q5alzxo-i.css';
import '../../css/o/oxm4kibaw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="m6tsdsbqn wm-shadow"/><path class="wm-shadow x8_7s2bbc"/><path class="q5alzxo-i"/><path class="oxm4kibaw"/></g>`,
		"fallback": "withicons-brutal:balloon",
	});
}

export default Component;
