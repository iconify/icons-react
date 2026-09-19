import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a_mmg7b7u.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a_mmg7b7u"/>`,
		"fallback": "fa7-brands:bootstrap",
	});
}

export default Component;
