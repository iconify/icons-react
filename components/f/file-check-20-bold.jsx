import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w8im5qk_h.css';
import '../../css/z/z13h4jbjh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w8im5qk_h"/><path class="z13h4jbjh"/>`,
		"fallback": "energy-icons:file-check-20-bold",
	});
}

export default Component;
