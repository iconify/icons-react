import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r_o80v9iz.css';

const viewBox = {"width":1792,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r_o80v9iz"/>`,
		"fallback": "fa:external-link",
	});
}

export default Component;
