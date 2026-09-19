import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xdgev-rkf.css';
import '../../css/n/nym97nevk.css';
import '../../css/u/u-bp7mb3x.css';
import '../../css/b/bmo7zrg8h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xdgev-rkf"/><path class="nym97nevk"/><path class="u-bp7mb3x"/><path class="bmo7zrg8h"/>`,
		"fallback": "flag:gh-1x1",
	});
}

export default Component;
