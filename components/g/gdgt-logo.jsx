import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/o/oy6pa2bwd.css';
import '../../css/e/eu2em5l2k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="oy6pa2bwd"/><path class="eu2em5l2k"/></g>`,
		"fallback": "streamline-logos:gdgt-logo",
	});
}

export default Component;
