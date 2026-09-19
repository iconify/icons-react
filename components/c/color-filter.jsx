import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l8qw21b7i.css';
import '../../css/d/dpo67b6zm.css';
import '../../css/z/z8_5hvbcj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l8qw21b7i"/><path class="dpo67b6zm"/><path class="z8_5hvbcj"/>`,
		"fallback": "ion:color-filter",
	});
}

export default Component;
