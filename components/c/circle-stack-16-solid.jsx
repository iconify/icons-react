import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv08i_bqv.css';
import '../../css/s/s1o53nbht.css';
import '../../css/q/qkn998sep.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sv08i_bqv"/><path class="s1o53nbht"/><path class="qkn998sep"/>`,
		"fallback": "heroicons:circle-stack-16-solid",
	});
}

export default Component;
