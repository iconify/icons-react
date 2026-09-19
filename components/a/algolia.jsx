import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tzohbdbkv.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tzohbdbkv"/>`,
		"fallback": "fa7-brands:algolia",
	});
}

export default Component;
