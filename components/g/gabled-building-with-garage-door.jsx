import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nnxrlvq5h.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nnxrlvq5h"/>`,
		"fallback": "pinhead:gabled-building-with-garage-door",
	});
}

export default Component;
