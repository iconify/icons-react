import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/stxidc2sn.css';
import '../../css/w/w1nvnyp9d.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="stxidc2sn"/><path class="w1nvnyp9d"/>`,
		"fallback": "devicon:forgejo-wordmark",
	});
}

export default Component;
