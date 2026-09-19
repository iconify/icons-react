import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/thmup_0jj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="thmup_0jj"/>`,
		"fallback": "icomoon-free:calendar",
	});
}

export default Component;
