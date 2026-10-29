import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rhc-2qift.css';
import '../../css/h/h86hhf6yy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rhc-2qift"/><path class="h86hhf6yy"/>`,
		"fallback": "withicons-bauhaus:braces",
	});
}

export default Component;
