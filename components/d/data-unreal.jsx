import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ep1is8b2n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ep1is8b2n"/>`,
		"fallback": "carbon:data-unreal",
	});
}

export default Component;
