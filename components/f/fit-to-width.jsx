import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rjfreibgp.css';
import '../../css/c/ca5ecz53l.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rjfreibgp"/><path class="ca5ecz53l"/>`,
		"fallback": "carbon:fit-to-width",
	});
}

export default Component;
