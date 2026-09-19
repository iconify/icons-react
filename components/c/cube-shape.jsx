import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hbuv3ob9p.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hbuv3ob9p"/>`,
		"fallback": "fluent-mdl2:cube-shape",
	});
}

export default Component;
