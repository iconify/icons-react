import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/lydmw8yfb.css';
import '../../css/d/dtyb4zbgu.css';
import '../../css/y/yafmuequb.css';
import '../../css/f/fxqaxnipa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="lydmw8yfb"/><path class="dtyb4zbgu wm-a"/><path class="wm-k yafmuequb"/><path class="fxqaxnipa wm-a"/></g>`,
		"fallback": "withicons:id-card-sketch",
	});
}

export default Component;
