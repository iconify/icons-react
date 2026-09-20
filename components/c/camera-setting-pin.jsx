import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/y1mc29t-p.css';
import '../../css/r/rkn19ozjd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="y1mc29t-p"/><path class="rkn19ozjd"/></g>`,
		"fallback": "streamline-sharp:camera-setting-pin",
	});
}

export default Component;
