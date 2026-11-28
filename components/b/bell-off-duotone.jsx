import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zd4so5blj.css';
import '../../css/h/h6e64ks2x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary zd4so5blj"/><path class="h6e64ks2x primary"/></g>`,
		"fallback": "iconaut:bell-off-duotone",
	});
}

export default Component;
