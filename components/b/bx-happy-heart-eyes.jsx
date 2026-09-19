import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tm_qsybka.css';
import '../../css/v/vdkkambso.css';
import '../../css/v/vy8kcme0f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tm_qsybka"/><path class="vdkkambso"/><path class="vy8kcme0f"/>`,
		"fallback": "bx:bx-happy-heart-eyes",
	});
}

export default Component;
