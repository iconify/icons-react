import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xorjyxbbi.css';
import '../../css/f/fhwfl_zxd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary xorjyxbbi"/><path class="fhwfl_zxd primary"/></g>`,
		"fallback": "iconaut:egg-duotone",
	});
}

export default Component;
