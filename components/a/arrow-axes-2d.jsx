import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uc6hhsb2m.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uc6hhsb2m"/>`,
		"fallback": "at-icons:arrow-axes-2d",
	});
}

export default Component;
