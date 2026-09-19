import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x07xl-bmy.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x07xl-bmy"/>`,
		"fallback": "fa7-brands:diaspora",
	});
}

export default Component;
