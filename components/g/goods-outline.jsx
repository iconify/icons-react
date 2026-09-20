import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xccoi3b1k.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xccoi3b1k"/>`,
		"fallback": "lsicon:goods-outline",
	});
}

export default Component;
