import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ima60vbta.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ima60vbta"/>`,
		"fallback": "vadivam:database-arrow-down",
	});
}

export default Component;
