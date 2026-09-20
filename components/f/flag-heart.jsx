import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/l/laxwrbc2u.css';
import '../../css/n/nva17gb-s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="laxwrbc2u"/><path class="nva17gb-s"/></g>`,
		"fallback": "streamline-cyber:flag-heart",
	});
}

export default Component;
