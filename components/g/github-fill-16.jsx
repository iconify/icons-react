import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mxhe1qt7r.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mxhe1qt7r"/>`,
		"fallback": "qlementine-icons:github-fill-16",
	});
}

export default Component;
