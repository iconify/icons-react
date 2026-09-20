import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/koyea542b.css';
import '../../css/z/zy-0-izpk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="koyea542b"/><path class="zy-0-izpk"/></g>`,
		"fallback": "streamline-ultimate:computer-chip-flash",
	});
}

export default Component;
