import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hvzkb_bhc.css';
import '../../css/r/rhvegq0-t.css';
import '../../css/i/i0x2txbtb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hvzkb_bhc"/><path class="rhvegq0-t"/><path class="i0x2txbtb"/>`,
		"fallback": "energy-icons:file-search-20-bold",
	});
}

export default Component;
