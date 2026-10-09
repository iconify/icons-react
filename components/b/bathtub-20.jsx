import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z90mb8szc.css';
import '../../css/a/a6h6rcbwt.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z90mb8szc"/><path class="a6h6rcbwt"/>`,
		"fallback": "energy-icons:bathtub-20",
	});
}

export default Component;
