import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s5ul61b_c.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s5ul61b_c"/>`,
		"fallback": "fa7-solid:grin-beam",
	});
}

export default Component;
