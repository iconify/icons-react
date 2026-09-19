import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rjwheac7f.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rjwheac7f"/>`,
		"fallback": "dashicons:editor-justify",
	});
}

export default Component;
