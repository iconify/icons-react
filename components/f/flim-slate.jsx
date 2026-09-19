import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/m77h6kjad.css';
import '../../css/d/dareue1ze.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="m77h6kjad"/><path class="dareue1ze"/></g>`,
		"fallback": "hugeicons:flim-slate",
	});
}

export default Component;
