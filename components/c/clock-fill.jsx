import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m7lhebcyl.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m7lhebcyl"/>`,
		"fallback": "f7:clock-fill",
	});
}

export default Component;
