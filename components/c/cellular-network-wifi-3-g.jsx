import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/z9lbs2b0c.css';
import '../../css/h/h1i1q3bak.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="z9lbs2b0c"/><path class="h1i1q3bak"/></g>`,
		"fallback": "streamline-ultimate:cellular-network-wifi-3-g",
	});
}

export default Component;
