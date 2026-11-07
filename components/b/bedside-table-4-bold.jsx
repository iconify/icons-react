import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ptbqdmbwo.css';
import '../../css/q/q0xeg4dib.css';
import '../../css/n/n6-3cmp4n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ptbqdmbwo"/><path class="q0xeg4dib"/><path clip-rule="evenodd" class="n6-3cmp4n"/>`,
		"fallback": "solar:bedside-table-4-bold",
	});
}

export default Component;
