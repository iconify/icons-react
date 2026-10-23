import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mxjbx473c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mxjbx473c"/>`,
		"fallback": "vadivam:dam",
	});
}

export default Component;
