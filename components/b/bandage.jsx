import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cbijc7bgs.css';
import '../../css/d/dukr1cmfl.css';
import '../../css/s/sh-gg_h6o.css';
import '../../css/u/ulhnd1a7l.css';
import '../../css/v/vld1wfbmu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cbijc7bgs"/><circle class="dukr1cmfl"/><circle class="sh-gg_h6o"/><circle class="ulhnd1a7l"/><circle class="vld1wfbmu"/>`,
		"fallback": "circum:bandage",
	});
}

export default Component;
