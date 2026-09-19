import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n5f6kvq_c.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n5f6kvq_c"/>`,
		"fallback": "garden:face-sad-fill-16",
	});
}

export default Component;
