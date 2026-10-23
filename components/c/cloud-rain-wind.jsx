import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sg12si0rh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sg12si0rh"/>`,
		"fallback": "vadivam:cloud-rain-wind",
	});
}

export default Component;
