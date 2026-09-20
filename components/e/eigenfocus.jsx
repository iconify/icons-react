import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lx0y__vby.css';
import '../../css/m/mpdhyabli.css';
import '../../css/o/o5sq00_9y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lx0y__vby"/><path class="mpdhyabli"/><path class="o5sq00_9y"/>`,
		"fallback": "selfhst:eigenfocus",
	});
}

export default Component;
