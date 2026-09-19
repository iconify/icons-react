import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gngoa7gvw.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gngoa7gvw"/>`,
		"fallback": "fa6-solid:book",
	});
}

export default Component;
