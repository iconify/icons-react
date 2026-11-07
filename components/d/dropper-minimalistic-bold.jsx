import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a1hxn4bwg.css';
import '../../css/u/ud-yki_gm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="a1hxn4bwg"/><path class="ud-yki_gm"/>`,
		"fallback": "solar:dropper-minimalistic-bold",
	});
}

export default Component;
