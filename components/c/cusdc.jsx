import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fsepixbkn.css';
import '../../css/c/cgtb-8b0p.css';
import '../../css/d/djamc0beq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fsepixbkn"/><path class="cgtb-8b0p"/><path class="djamc0beq"/>`,
		"fallback": "token:cusdc",
	});
}

export default Component;
