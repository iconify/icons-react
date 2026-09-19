import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bs_2dcbys.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bs_2dcbys"/>`,
		"fallback": "bi:1-square-fill",
	});
}

export default Component;
