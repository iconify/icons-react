import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wiw1n4qap.css';
import '../../css/u/ugyrmsdwo.css';
import '../../css/t/ti3gn7b9e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wiw1n4qap"/><circle class="ugyrmsdwo"/><path class="ti3gn7b9e"/>`,
		"fallback": "carbon:augmented-reality",
	});
}

export default Component;
