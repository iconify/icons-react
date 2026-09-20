import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pkw51fnti.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pkw51fnti"/>`,
		"fallback": "pinhead:house-with-flag-and-info-i",
	});
}

export default Component;
