import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vvu38xb6w.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vvu38xb6w"/>`,
		"fallback": "fluent-mdl2:increase-indent-text",
	});
}

export default Component;
