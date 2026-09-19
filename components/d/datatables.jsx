import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pfg5l5b3a.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pfg5l5b3a"/>`,
		"fallback": "devicon:datatables",
	});
}

export default Component;
