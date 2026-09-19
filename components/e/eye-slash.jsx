import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b_e9v2bir.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b_e9v2bir"/>`,
		"fallback": "fa-regular:eye-slash",
	});
}

export default Component;
