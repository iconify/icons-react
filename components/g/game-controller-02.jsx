import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/ryy00cbat.css';
import '../../css/j/jz5umcc9b.css';
import '../../css/v/v4a588b4j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ryy00cbat"/><path class="jz5umcc9b"/><path class="v4a588b4j"/></g>`,
		"fallback": "hugeicons:game-controller-02",
	});
}

export default Component;
