import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/h/hwza-gbef.css';
import '../../css/g/g71x3acvt.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><rect class="hwza-gbef"/><rect class="g71x3acvt"/></g>`,
		"fallback": "streamline:entertainment-control-button-pause-2-button-television-buttons-movies-tv-pause-video-controls",
	});
}

export default Component;
