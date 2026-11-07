import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rnb90nbxf.css';
import '../../css/z/z__w_6-jn.css';
import '../../css/w/wji_d3v3x.css';
import '../../css/k/k7cui-bhf.css';
import '../../css/c/c2mpd8rak.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rnb90nbxf"/><path class="z__w_6-jn"/><path class="wji_d3v3x"/><path class="k7cui-bhf"/><path class="c2mpd8rak"/>`,
		"fallback": "solar:full-screen-circle-bold-duotone",
	});
}

export default Component;
