import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uqw7-8bfx.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uqw7-8bfx"/>`,
		"fallback": "fa7-brands:bitbucket",
	});
}

export default Component;
