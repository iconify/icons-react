import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mc5xhwlwg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mc5xhwlwg"/>`,
		"fallback": "at-icons:bullet",
	});
}

export default Component;
