import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w2ghl_lxl.css';
import '../../css/z/zb-g-abte.css';
import '../../css/i/i0x2txbtb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w2ghl_lxl"/><path class="zb-g-abte"/><path class="i0x2txbtb"/>`,
		"fallback": "energy-icons:folder-search-20-bold",
	});
}

export default Component;
