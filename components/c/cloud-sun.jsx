import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h36_77paj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h36_77paj"/>`,
		"fallback": "keyline-icons:cloud-sun",
	});
}

export default Component;
