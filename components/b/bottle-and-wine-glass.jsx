import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qbxsy4b3a.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qbxsy4b3a"/>`,
		"fallback": "roentgen:bottle-and-wine-glass",
	});
}

export default Component;
