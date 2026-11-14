import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/vqjpdbb6e.css';
import '../../css/n/nlm8upbtb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="vqjpdbb6e"/><path class="nlm8upbtb"/></g>`,
		"fallback": "hugeicons:credit-card-change",
	});
}

export default Component;
