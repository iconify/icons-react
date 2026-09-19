import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ash3_cbor.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ash3_cbor"/>`,
		"fallback": "game-icons:evil-tree",
	});
}

export default Component;
