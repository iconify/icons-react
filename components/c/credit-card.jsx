import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bb3g-_4cc.css';
import '../../css/f/fqlp7pbrj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="bb3g-_4cc"/><path class="fqlp7pbrj"/></g>`,
		"fallback": "lucide:credit-card",
	});
}

export default Component;
