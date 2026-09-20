import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mfv4nob0v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mfv4nob0v"/>`,
		"fallback": "simple-icons:huggingface",
	});
}

export default Component;
