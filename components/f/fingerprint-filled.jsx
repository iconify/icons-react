import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wz97-nbxy.css';
import '../../css/j/jjnilixeo.css';
import '../../css/s/sdkjm1bzk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wz97-nbxy"/><path class="jjnilixeo"/><path class="sdkjm1bzk"/></g>`,
		"fallback": "reicon:fingerprint-filled",
	});
}

export default Component;
