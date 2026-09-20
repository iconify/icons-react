import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a13q3r_5r.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a13q3r_5r"/>`,
		"fallback": "pinhead:ear-atop-slash-with-t",
	});
}

export default Component;
