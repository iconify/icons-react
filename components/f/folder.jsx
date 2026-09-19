import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hm4ts6b1r.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hm4ts6b1r"/>`,
		"fallback": "at-icons:folder",
	});
}

export default Component;
