import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g79_qq09y.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g79_qq09y"/>`,
		"fallback": "fa6-brands:git-alt",
	});
}

export default Component;
