import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/yigrcjbsp.css';
import '../../css/w/w57c_1srk.css';
import '../../css/z/zr846pb6r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="yigrcjbsp"/><path class="w57c_1srk"/><path class="zr846pb6r"/></g>`,
		"fallback": "solar:bag-music-2-line-duotone",
	});
}

export default Component;
