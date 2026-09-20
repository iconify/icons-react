import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nj1uad_0x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nj1uad_0x"/>`,
		"fallback": "selfhst:dockprobe-dark",
	});
}

export default Component;
