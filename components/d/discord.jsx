import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o5xp_8gtr.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o5xp_8gtr"/>`,
		"fallback": "fa-brands:discord",
	});
}

export default Component;
