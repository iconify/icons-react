import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dd06o6ovg.css';
import '../../css/u/ur40gui8b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dd06o6ovg"/><path class="ur40gui8b"/>`,
		"fallback": "solar:i-phone-bold-duotone",
	});
}

export default Component;
