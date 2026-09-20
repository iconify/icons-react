import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ch0q1dbpa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ch0q1dbpa"/>`,
		"fallback": "simple-icons:compilerexplorer",
	});
}

export default Component;
