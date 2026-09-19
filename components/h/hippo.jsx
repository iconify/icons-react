import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ui36x6bmn.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ui36x6bmn"/>`,
		"fallback": "fa-solid:hippo",
	});
}

export default Component;
