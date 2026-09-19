import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r-tok76br.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r-tok76br"/>`,
		"fallback": "bi:cloud-arrow-up-fill",
	});
}

export default Component;
