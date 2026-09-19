import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kcuhc8bwo.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kcuhc8bwo"/>`,
		"fallback": "icons8:cancel-2",
	});
}

export default Component;
