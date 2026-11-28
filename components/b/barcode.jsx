import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ubdmll87o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ubdmll87o"/>`,
		"fallback": "noviair:barcode",
	});
}

export default Component;
