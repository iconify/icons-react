import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b-3m8fbaz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b-3m8fbaz"/>`,
		"fallback": "bi:cloud-minus-fill",
	});
}

export default Component;
