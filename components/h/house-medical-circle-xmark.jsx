import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h-c44pbbr.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h-c44pbbr"/>`,
		"fallback": "fa6-solid:house-medical-circle-xmark",
	});
}

export default Component;
