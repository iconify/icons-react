import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rxvd-g65l.css';
import '../../css/s/srdp-xb5r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rxvd-g65l"/><path clip-rule="evenodd" class="srdp-xb5r"/>`,
		"fallback": "solar:cloud-bolt-minimalistic-bold-duotone",
	});
}

export default Component;
