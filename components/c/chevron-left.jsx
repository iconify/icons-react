import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qs93c7boo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qs93c7boo"/>`,
		"fallback": "nimbus:chevron-left",
	});
}

export default Component;
