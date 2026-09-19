import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jxyj62m0c.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jxyj62m0c"/>`,
		"fallback": "bi:fast-forward-btn-fill",
	});
}

export default Component;
