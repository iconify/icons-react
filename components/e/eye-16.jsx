import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y3erhq7-p.css';
import '../../css/m/m5_1mibrw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y3erhq7-p"/><path clip-rule="evenodd" class="m5_1mibrw"/>`,
		"fallback": "qlementine-icons:eye-16",
	});
}

export default Component;
