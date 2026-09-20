import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/he1c9nb2r.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="he1c9nb2r"/>`,
		"fallback": "pinhead:film-and-optical-disc",
	});
}

export default Component;
