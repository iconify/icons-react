import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xvjk-cbox.css';
import '../../css/s/s5dde6qgk.css';
import '../../css/i/ix8cskbcl.css';
import '../../css/z/z4e6-1p3b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xvjk-cbox"/><path class="s5dde6qgk"/><path class="ix8cskbcl"/><path class="z4e6-1p3b"/></g>`,
		"fallback": "solar:clapperboard-text-line-duotone",
	});
}

export default Component;
