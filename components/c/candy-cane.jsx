import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eg69lwbcz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eg69lwbcz"/>`,
		"fallback": "vadivam:candy-cane",
	});
}

export default Component;
