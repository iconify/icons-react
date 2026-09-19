import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b7-gf6ssk.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b7-gf6ssk"/>`,
		"fallback": "fa7-brands:black-tie",
	});
}

export default Component;
