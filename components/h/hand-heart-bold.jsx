import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dgs-libjk.css';
import '../../css/o/oam048mkt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dgs-libjk"/><path class="oam048mkt"/>`,
		"fallback": "solar:hand-heart-bold",
	});
}

export default Component;
