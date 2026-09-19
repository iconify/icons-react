import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m0z666bnz.css';
import '../../css/l/l2skeeb_k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m0z666bnz"/><path class="l2skeeb_k"/>`,
		"fallback": "bxs:duplicate",
	});
}

export default Component;
