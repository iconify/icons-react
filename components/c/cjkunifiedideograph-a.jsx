import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w25egcbny.css';
import '../../css/e/egmsjwuap.css';
import '../../css/x/xsjsq4bbo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w25egcbny"/><path class="egmsjwuap"/><path class="xsjsq4bbo"/>`,
		"fallback": "fxemoji:cjkunifiedideograph-a",
	});
}

export default Component;
