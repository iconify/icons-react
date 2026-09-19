import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kci5s6b3p.css';

const viewBox = {"width":441,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kci5s6b3p"/>`,
		"fallback": "file-icons:dragonflybsd",
	});
}

export default Component;
