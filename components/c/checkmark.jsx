import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ucujz0b4p.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ucujz0b4p"/>`,
		"fallback": "icons8:checkmark",
	});
}

export default Component;
