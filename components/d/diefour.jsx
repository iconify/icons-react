import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tdv30hu3i.css';

const viewBox = {"width":960,"height":959};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tdv30hu3i"/>`,
		"fallback": "whh:diefour",
	});
}

export default Component;
