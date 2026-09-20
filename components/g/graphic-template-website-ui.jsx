import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/r/r5c99opiy.css';
import '../../css/t/tbd4akb2n.css';
import '../../css/v/vz4lvsbbz.css';
import '../../css/a/alul2bc2y.css';
import '../../css/a/ac8g9ubol.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="r5c99opiy"/><path class="tbd4akb2n"/><path class="vz4lvsbbz"/><path class="alul2bc2y"/><path class="ac8g9ubol"/></g>`,
		"fallback": "streamline-sharp-color:graphic-template-website-ui",
	});
}

export default Component;
