import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/s/s3u9v8bra.css';
import '../../css/h/hae04pgwc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="s3u9v8bra"/><path class="hae04pgwc"/></g>`,
		"fallback": "keyline-icons:bike-sharp-duotone",
	});
}

export default Component;
