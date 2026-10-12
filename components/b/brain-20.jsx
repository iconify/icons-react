import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lyyw2ejbf.css';
import '../../css/c/cdzkw9bwr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lyyw2ejbf"/><path class="cdzkw9bwr"/>`,
		"fallback": "energy-icons:brain-20",
	});
}

export default Component;
