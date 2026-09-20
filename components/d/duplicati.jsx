import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vvi92ybru.css';
import '../../css/k/k9wv4hbjg.css';
import '../../css/f/fcv7rpbbv.css';
import '../../css/z/z-rjlmbjp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vvi92ybru"/><path class="k9wv4hbjg"/><path class="fcv7rpbbv"/><path class="z-rjlmbjp"/>`,
		"fallback": "selfhst:duplicati",
	});
}

export default Component;
