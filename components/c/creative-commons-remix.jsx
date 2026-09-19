import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c_2evxb0q.css';

const viewBox = {"width":496,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c_2evxb0q"/>`,
		"fallback": "fa-brands:creative-commons-remix",
	});
}

export default Component;
