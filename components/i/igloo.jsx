import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p2la65t2v.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p2la65t2v"/>`,
		"fallback": "fa-solid:igloo",
	});
}

export default Component;
