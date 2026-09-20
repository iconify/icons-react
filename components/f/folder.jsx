import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s86b8cbde.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s86b8cbde"/>`,
		"fallback": "proicons:folder",
	});
}

export default Component;
