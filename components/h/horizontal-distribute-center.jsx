import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vdwc7do4w.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vdwc7do4w"/>`,
		"fallback": "fluent-mdl2:horizontal-distribute-center",
	});
}

export default Component;
