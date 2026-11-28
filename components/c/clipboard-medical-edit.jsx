import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sgnvt6b9c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sgnvt6b9c"/>`,
		"fallback": "noviair:clipboard-medical-edit",
	});
}

export default Component;
