import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qbeushb0e.css';
import '../../css/r/rik56bhzy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qbeushb0e"/><path class="rik56bhzy"/>`,
		"fallback": "streamline-pixel:food-drink-desert-cupcake",
	});
}

export default Component;
