import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lk60uqdwt.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lk60uqdwt"/>`,
		"fallback": "bi:arrow-up-right",
	});
}

export default Component;
