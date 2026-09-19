import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p4csvlige.css';
import '../../css/y/y--a8-brh.css';
import '../../css/j/jap_-fj2m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p4csvlige"/><path class="y--a8-brh"/><path class="jap_-fj2m"/>`,
		"fallback": "ion:earth-sharp",
	});
}

export default Component;
