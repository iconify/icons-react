import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gdt_johva.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gdt_johva"/>`,
		"fallback": "vadivam:circle-pause",
	});
}

export default Component;
