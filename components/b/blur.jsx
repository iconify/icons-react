import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ig_wr6bmq.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ig_wr6bmq"/>`,
		"fallback": "fluent-mdl2:blur",
	});
}

export default Component;
