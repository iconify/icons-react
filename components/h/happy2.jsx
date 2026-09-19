import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qqu_scb-i.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qqu_scb-i"/>`,
		"fallback": "icomoon-free:happy2",
	});
}

export default Component;
