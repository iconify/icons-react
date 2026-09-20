import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/as1j4ndtg.css';
import '../../css/q/qyo4u7bbg.css';
import '../../css/b/bc1hhwfbt.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="as1j4ndtg"/><path class="qyo4u7bbg"/><path class="bc1hhwfbt"/>`,
		"fallback": "octicon:goal-16",
	});
}

export default Component;
