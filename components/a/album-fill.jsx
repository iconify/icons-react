import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nqw4tx2is.css';
import '../../css/w/wgp3imbgo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nqw4tx2is"/><path clip-rule="evenodd" class="wgp3imbgo"/>`,
		"fallback": "si:album-fill",
	});
}

export default Component;
