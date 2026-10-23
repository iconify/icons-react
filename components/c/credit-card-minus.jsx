import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u0xf8_tbp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u0xf8_tbp"/>`,
		"fallback": "vadivam:credit-card-minus",
	});
}

export default Component;
