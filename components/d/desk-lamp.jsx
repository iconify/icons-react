import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oz41yccml.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oz41yccml"/>`,
		"fallback": "mdi:desk-lamp",
	});
}

export default Component;
