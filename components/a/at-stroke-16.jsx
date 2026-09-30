import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bwgw36hjy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bwgw36hjy"/>`,
		"fallback": "garden:at-stroke-16",
	});
}

export default Component;
