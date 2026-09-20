import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/c0jamrbeb.css';
import '../../css/q/quhexczws.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="c0jamrbeb"/><path class="quhexczws"/></g>`,
		"fallback": "streamline-ultimate:charger-1",
	});
}

export default Component;
