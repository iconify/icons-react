import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vcin9tbkw.css';

const viewBox = {"width":2304,"height":1280};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vcin9tbkw"/>`,
		"fallback": "fa:battery-4",
	});
}

export default Component;
