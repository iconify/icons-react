import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yo1nfcbjg.css';
import '../../css/h/hgfnzqd-t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yo1nfcbjg"/><path class="hgfnzqd-t"/>`,
		"fallback": "cil:asterisk-circle",
	});
}

export default Component;
