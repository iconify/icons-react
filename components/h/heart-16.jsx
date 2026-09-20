import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p64taib3f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p64taib3f"/>`,
		"fallback": "octicon:heart-16",
	});
}

export default Component;
