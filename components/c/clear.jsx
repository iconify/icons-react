import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gw4_6ch_k.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gw4_6ch_k"/>`,
		"fallback": "fluent-mdl2:clear",
	});
}

export default Component;
