import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mfuw7jbfz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mfuw7jbfz"/>`,
		"fallback": "carbon:classification-groups",
	});
}

export default Component;
