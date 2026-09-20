import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p07tmccvv.css';
import '../../css/w/wnmdmcbzm.css';
import '../../css/k/k1ta6cbfr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="p07tmccvv"><path class="wnmdmcbzm"/><path class="k1ta6cbfr"/></g>`,
		"fallback": "tdesign:airplay-wave",
	});
}

export default Component;
