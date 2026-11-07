import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l7d917_2k.css';
import '../../css/u/ud-yki_gm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l7d917_2k"/><path class="ud-yki_gm"/>`,
		"fallback": "solar:dropper-minimalistic-2-bold",
	});
}

export default Component;
