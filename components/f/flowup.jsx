import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ksiwmgbtd.css';

const viewBox = {"width":1024,"height":833};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ksiwmgbtd"/>`,
		"fallback": "whh:flowup",
	});
}

export default Component;
