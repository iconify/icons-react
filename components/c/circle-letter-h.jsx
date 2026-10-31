import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cyp7zparo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cyp7zparo"/>`,
		"fallback": "vadivam:circle-letter-h",
	});
}

export default Component;
