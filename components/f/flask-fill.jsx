import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ps7v1ibub.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ps7v1ibub"/>`,
		"fallback": "bi:flask-fill",
	});
}

export default Component;
