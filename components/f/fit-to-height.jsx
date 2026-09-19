import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e_9-kogec.css';
import '../../css/c/ca5ecz53l.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e_9-kogec"/><path class="ca5ecz53l"/>`,
		"fallback": "carbon:fit-to-height",
	});
}

export default Component;
