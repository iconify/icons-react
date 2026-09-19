import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ii8x1vsub.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ii8x1vsub"/>`,
		"fallback": "fluent-mdl2:clear-formatting-eraser",
	});
}

export default Component;
