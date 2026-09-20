import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_p_7zbqu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t_p_7zbqu"/>`,
		"fallback": "rivet-icons:check",
	});
}

export default Component;
