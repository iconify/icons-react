import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ea2fnobqg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ea2fnobqg"/>`,
		"fallback": "lets-icons:folder",
	});
}

export default Component;
