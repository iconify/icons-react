import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/w/wpc9fjb6p.css';
import '../../css/e/efk5_tbwo.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="wpc9fjb6p"/><path class="efk5_tbwo"/></g>`,
		"fallback": "marketeq:handphone-laptop",
	});
}

export default Component;
