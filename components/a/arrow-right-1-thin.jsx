import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/etig-9n9u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="etig-9n9u"/>`,
		"fallback": "iconamoon:arrow-right-1-thin",
	});
}

export default Component;
