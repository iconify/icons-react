import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e9mby9bzc.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e9mby9bzc"/>`,
		"fallback": "fa7-solid:angry",
	});
}

export default Component;
