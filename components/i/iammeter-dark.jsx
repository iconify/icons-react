import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ftl1fs6jj.css';
import '../../css/d/d_6q8_bmz.css';
import '../../css/p/p9cww-tje.css';
import '../../css/n/n2ukd0cxs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ftl1fs6jj"/><path class="d_6q8_bmz"/><path class="p9cww-tje"/><path class="n2ukd0cxs"/>`,
		"fallback": "selfhst:iammeter-dark",
	});
}

export default Component;
