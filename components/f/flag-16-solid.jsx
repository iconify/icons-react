import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gum74vxer.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gum74vxer"/>`,
		"fallback": "heroicons:flag-16-solid",
	});
}

export default Component;
