import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bp2ifdcbr.css';
import '../../css/d/dn0-kucri.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bp2ifdcbr"/><path class="dn0-kucri"/>`,
		"fallback": "ep:chat-line-round",
	});
}

export default Component;
