import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nf_p894yt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nf_p894yt"/>`,
		"fallback": "fa-solid:deaf",
	});
}

export default Component;
