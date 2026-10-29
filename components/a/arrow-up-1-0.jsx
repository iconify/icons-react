import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m15i8pbih.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m15i8pbih"/>`,
		"fallback": "vadivam:arrow-up-1-0",
	});
}

export default Component;
