import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bcoqj_-6o.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ahq0qbnat.css';
import '../../css/p/p_3zmsvya.css';
import '../../css/w/wy2de7a6w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGT5XiNhOv" class="bcoqj_-6o"/></defs><g class="ft5dv1b6b"><use href="#SVGT5XiNhOv"/><path class="ahq0qbnat"/><g class="p_3zmsvya"><use href="#SVGT5XiNhOv"/><path class="wy2de7a6w"/></g></g>`,
		"fallback": "tdesign:device",
	});
}

export default Component;
