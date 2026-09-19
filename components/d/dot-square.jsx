import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zkyq7zjpb.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zkyq7zjpb"/>`,
		"fallback": "f7:dot-square",
	});
}

export default Component;
