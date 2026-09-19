import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wet55gblz.css';
import '../../css/y/yonkb7w3v.css';
import '../../css/v/v9kz_bb3f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wet55gblz"/><path class="yonkb7w3v"/><path class="v9kz_bb3f"/>`,
		"fallback": "bxl:convex",
	});
}

export default Component;
