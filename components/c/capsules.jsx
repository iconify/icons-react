import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nwiq0khii.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nwiq0khii"/>`,
		"fallback": "fa7-solid:capsules",
	});
}

export default Component;
