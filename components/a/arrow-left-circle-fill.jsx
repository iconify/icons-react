import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ztd29dblt.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ztd29dblt"/>`,
		"fallback": "bi:arrow-left-circle-fill",
	});
}

export default Component;
