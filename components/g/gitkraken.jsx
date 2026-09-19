import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yfiie8bwc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yfiie8bwc"/>`,
		"fallback": "cib:gitkraken",
	});
}

export default Component;
