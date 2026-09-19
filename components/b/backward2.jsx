import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mbpx2jbta.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mbpx2jbta"/>`,
		"fallback": "icomoon-free:backward2",
	});
}

export default Component;
