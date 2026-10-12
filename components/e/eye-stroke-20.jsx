import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ob_63mboo.css';
import '../../css/w/w55hdcgdy.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ob_63mboo"/><path class="w55hdcgdy"/>`,
		"fallback": "garden:eye-stroke-20",
	});
}

export default Component;
