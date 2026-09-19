import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r09i3hofv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r09i3hofv"/>`,
		"fallback": "bi:dice-3-fill",
	});
}

export default Component;
