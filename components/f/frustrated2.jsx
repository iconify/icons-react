import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/do713mb7p.css';
import '../../css/w/wft5owbny.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="do713mb7p"/><path class="wft5owbny"/>`,
		"fallback": "icomoon-free:frustrated2",
	});
}

export default Component;
