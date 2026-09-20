import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/g/gjcwn2snx.css';
import '../../css/h/hno8pybbp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="gjcwn2snx"/><path class="hno8pybbp"/></g>`,
		"fallback": "streamline-cyber:computer-device-connection",
	});
}

export default Component;
