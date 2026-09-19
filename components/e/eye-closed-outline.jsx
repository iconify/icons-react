import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/affnekbuy.css';
import '../../css/w/wd3gak68y.css';
import '../../css/x/xu1bf4b6f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="affnekbuy"/><path class="wd3gak68y"/><path class="xu1bf4b6f"/>`,
		"fallback": "basil:eye-closed-outline",
	});
}

export default Component;
