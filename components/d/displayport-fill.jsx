import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r3v46m1xl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r3v46m1xl"/>`,
		"fallback": "bi:displayport-fill",
	});
}

export default Component;
