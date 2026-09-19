import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zh9mnbc-e.css';
import '../../css/g/gibdywb2h.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zh9mnbc-e"/><path class="gibdywb2h"/>`,
		"fallback": "carbon:credentials",
	});
}

export default Component;
