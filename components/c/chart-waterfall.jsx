import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fidptbk8m.css';
import '../../css/v/vb_01fboe.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fidptbk8m"/><path class="vb_01fboe"/>`,
		"fallback": "carbon:chart-waterfall",
	});
}

export default Component;
