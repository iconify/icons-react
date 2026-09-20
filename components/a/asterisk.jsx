import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m4jx3cp9c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m4jx3cp9c"/>`,
		"fallback": "vadivam:asterisk",
	});
}

export default Component;
