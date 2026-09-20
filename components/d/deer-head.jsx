import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zp1219b-m.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zp1219b-m"/>`,
		"fallback": "pinhead:deer-head",
	});
}

export default Component;
