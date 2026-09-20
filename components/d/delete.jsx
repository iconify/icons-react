import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d17dszf8h.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d17dszf8h"/>`,
		"fallback": "jam:delete",
	});
}

export default Component;
