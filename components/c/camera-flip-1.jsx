import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/e/e6vgm3bwt.css';
import '../../css/v/vd6j88bit.css';
import '../../css/e/efoveubqt.css';
import '../../css/e/ewsitqbiy.css';
import '../../css/t/t00ahdbzb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="e6vgm3bwt"/><path class="vd6j88bit"/><path class="efoveubqt"/><path class="ewsitqbiy"/><path class="t00ahdbzb"/></g>`,
		"fallback": "streamline-sharp-color:camera-flip-1",
	});
}

export default Component;
