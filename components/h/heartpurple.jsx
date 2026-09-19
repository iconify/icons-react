import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kzjgi_bqf.css';
import '../../css/d/dx1vlmbja.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kzjgi_bqf"/><path class="dx1vlmbja"/>`,
		"fallback": "fxemoji:heartpurple",
	});
}

export default Component;
