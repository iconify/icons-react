import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i3ti-bn3p.css';
import '../../css/g/gjagohdeb.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i3ti-bn3p"/><path class="gjagohdeb"/>`,
		"fallback": "lineicons:calendar",
	});
}

export default Component;
