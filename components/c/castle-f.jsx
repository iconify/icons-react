import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y55n2cbdm.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-2.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y55n2cbdm"/>`,
		"fallback": "jam:castle-f",
	});
}

export default Component;
