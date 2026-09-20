import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vr50_qbod.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vr50_qbod"/>`,
		"fallback": "qlementine-icons:align-right-2-16",
	});
}

export default Component;
