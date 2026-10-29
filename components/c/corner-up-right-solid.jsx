import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fvi4jzfbn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fvi4jzfbn"/>`,
		"fallback": "withicons:corner-up-right-solid",
	});
}

export default Component;
