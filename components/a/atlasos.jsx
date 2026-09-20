import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fokc71-mg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fokc71-mg"/>`,
		"fallback": "simple-icons:atlasos",
	});
}

export default Component;
