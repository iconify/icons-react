import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lzd5abbkv.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lzd5abbkv"/>`,
		"fallback": "fa7-solid:greater-than-equal",
	});
}

export default Component;
