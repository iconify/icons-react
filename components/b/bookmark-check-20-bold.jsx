import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x07oq7k1t.css';
import '../../css/b/b53sk69qk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x07oq7k1t"/><path class="b53sk69qk"/>`,
		"fallback": "energy-icons:bookmark-check-20-bold",
	});
}

export default Component;
