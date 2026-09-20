import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/s_h2a60vo.css';
import '../../css/m/m51bgsblf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="s_h2a60vo"/><path class="m51bgsblf"/></g>`,
		"fallback": "streamline-sharp:cashier-machine-2",
	});
}

export default Component;
