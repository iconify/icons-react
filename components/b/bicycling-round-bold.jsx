import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/akzk_xbgp.css';
import '../../css/l/lp8u00bhr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="akzk_xbgp"/><path clip-rule="evenodd" class="lp8u00bhr"/>`,
		"fallback": "solar:bicycling-round-bold",
	});
}

export default Component;
