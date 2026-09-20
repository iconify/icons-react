import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j556dzyel.css';
import '../../css/n/nvgsxqn9s.css';
import '../../css/l/lukm4y7qu.css';
import '../../css/w/w2vc9ib5u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j556dzyel"/><path class="nvgsxqn9s"/><path class="lukm4y7qu"/><path class="w2vc9ib5u"/>`,
		"fallback": "selfhst:google-photos",
	});
}

export default Component;
