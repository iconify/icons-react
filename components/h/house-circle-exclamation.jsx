import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r2gh_abbu.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r2gh_abbu"/>`,
		"fallback": "fa7-solid:house-circle-exclamation",
	});
}

export default Component;
