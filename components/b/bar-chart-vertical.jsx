import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lz612abec.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lz612abec"/>`,
		"fallback": "fluent-mdl2:bar-chart-vertical",
	});
}

export default Component;
