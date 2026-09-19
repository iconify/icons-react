import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zv3a_cc7a.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zv3a_cc7a"/>`,
		"fallback": "fluent-mdl2:caret-down-8",
	});
}

export default Component;
