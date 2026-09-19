import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k-i75s6_k.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k-i75s6_k"/>`,
		"fallback": "whh:fastbackward",
	});
}

export default Component;
