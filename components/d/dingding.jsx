import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/voqdh3b2p.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="voqdh3b2p"/>`,
		"fallback": "uiw:dingding",
	});
}

export default Component;
