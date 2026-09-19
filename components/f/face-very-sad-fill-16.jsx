import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bwcxw0bdi.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bwcxw0bdi"/>`,
		"fallback": "garden:face-very-sad-fill-16",
	});
}

export default Component;
