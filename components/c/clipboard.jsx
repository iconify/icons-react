import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mlldb5b_c.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mlldb5b_c"/>`,
		"fallback": "fa7-regular:clipboard",
	});
}

export default Component;
