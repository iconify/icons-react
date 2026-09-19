import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gn5v98bik.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gn5v98bik"/>`,
		"fallback": "dashicons:buddicons-groups",
	});
}

export default Component;
