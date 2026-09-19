import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jvf4-gbvv.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jvf4-gbvv"/>`,
		"fallback": "garden:home-fill-26",
	});
}

export default Component;
