import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/uf6sm2mwe.css';
import '../../css/y/ya_vffb0k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="uf6sm2mwe"/><path class="ya_vffb0k"/></g>`,
		"fallback": "hugeicons:image-delete-01",
	});
}

export default Component;
