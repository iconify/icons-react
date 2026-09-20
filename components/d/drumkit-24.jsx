import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v2k757bsm.css';
import '../../css/p/p3xr9ebyn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v2k757bsm"/><path clip-rule="evenodd" class="p3xr9ebyn"/>`,
		"fallback": "qlementine-icons:drumkit-24",
	});
}

export default Component;
