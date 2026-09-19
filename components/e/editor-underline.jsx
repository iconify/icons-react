import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r_2v6m4fk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r_2v6m4fk"/>`,
		"fallback": "dashicons:editor-underline",
	});
}

export default Component;
