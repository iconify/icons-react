import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y02gaibli.css';
import '../../css/w/wgcfbo68c.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y02gaibli"/><path class="wgcfbo68c"/>`,
		"fallback": "tabler-flags:antarctica",
	});
}

export default Component;
