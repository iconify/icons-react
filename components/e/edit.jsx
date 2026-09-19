import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r_rekbcun.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r_rekbcun"/>`,
		"fallback": "fluent-mdl2:edit",
	});
}

export default Component;
