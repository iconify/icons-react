import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vlvo0thnk.css';
import '../../css/i/iih3otspu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vlvo0thnk"/><path class="iih3otspu"/>`,
		"fallback": "carbon:ibm-watson-machine-learning",
	});
}

export default Component;
