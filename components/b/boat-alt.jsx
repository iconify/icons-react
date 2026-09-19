import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r9g27pb1k.css';
import '../../css/s/soed_umth.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r9g27pb1k"/><path class="soed_umth"/>`,
		"fallback": "cil:boat-alt",
	});
}

export default Component;
