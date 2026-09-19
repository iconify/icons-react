import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hsuw80_8b.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hsuw80_8b"/>`,
		"fallback": "garden:chevron-up-fill-16",
	});
}

export default Component;
