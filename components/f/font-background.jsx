import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gy_lvofyo.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/no7mv0dyu.css';
import '../../css/p/p_3zmsvya.css';
import '../../css/f/fw-0c04el.css';

const viewBox = {"width":24,"height":25};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGFHhwLbcW" class="gy_lvofyo"/></defs><g class="ft5dv1b6b"><path class="no7mv0dyu"/><use href="#SVGFHhwLbcW"/><g class="p_3zmsvya"><use href="#SVGFHhwLbcW"/><path class="fw-0c04el"/></g></g>`,
		"fallback": "tdesign:font-background",
	});
}

export default Component;
