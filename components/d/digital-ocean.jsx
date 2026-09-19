import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ajrmk5k8z.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ajrmk5k8z"/>`,
		"fallback": "fa7-brands:digital-ocean",
	});
}

export default Component;
