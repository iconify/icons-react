import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/t/tejuo1bjd.css';
import '../../css/c/cflizlb9f.css';
import '../../css/q/q5m2swb8b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="tejuo1bjd"/><path class="cflizlb9f"/><path class="q5m2swb8b"/></g>`,
		"fallback": "streamline-sharp-color:happy-face",
	});
}

export default Component;
