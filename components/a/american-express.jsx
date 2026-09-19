import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h3r70jbnh.css';

const viewBox = {"width":36,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h3r70jbnh"/>`,
		"fallback": "fontisto:american-express",
	});
}

export default Component;
