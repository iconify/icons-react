import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xdicv_b1k.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xdicv_b1k"/>`,
		"fallback": "pinhead:eaved-box-gabled-building-with-chimney",
	});
}

export default Component;
