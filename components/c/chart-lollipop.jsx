import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uh_k5d__w.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uh_k5d__w"/>`,
		"fallback": "carbon:chart-lollipop",
	});
}

export default Component;
