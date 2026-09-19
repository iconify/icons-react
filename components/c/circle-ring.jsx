import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cgkf_bm2q.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cgkf_bm2q"/>`,
		"fallback": "fluent-mdl2:circle-ring",
	});
}

export default Component;
