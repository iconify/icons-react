import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kyfik8bhq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kyfik8bhq"/>`,
		"fallback": "carbon:deployment-unit-installation",
	});
}

export default Component;
