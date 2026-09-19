import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c76i_ob0l.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c76i_ob0l"/>`,
		"fallback": "bi:bag-plus-fill",
	});
}

export default Component;
