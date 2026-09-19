import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e-6hxkafq.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e-6hxkafq"/>`,
		"fallback": "fa6-solid:file-contract",
	});
}

export default Component;
