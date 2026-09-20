import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ia6rq2b2c.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ia6rq2b2c"/>`,
		"fallback": "la:clinic-medical-solid",
	});
}

export default Component;
