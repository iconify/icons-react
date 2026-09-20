import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3b2z9bzs.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l3b2z9bzs"/>`,
		"fallback": "qlementine-icons:check-tick-small-16",
	});
}

export default Component;
