import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qickg1epq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qickg1epq"/>`,
		"fallback": "at-icons:curly-brackets",
	});
}

export default Component;
