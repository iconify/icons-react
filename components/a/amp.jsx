import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pmr0swbhc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pmr0swbhc"/>`,
		"fallback": "token:amp",
	});
}

export default Component;
