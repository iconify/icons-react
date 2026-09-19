import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rciznhb1m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rciznhb1m"/>`,
		"fallback": "fxemoji:blackspadesuit",
	});
}

export default Component;
