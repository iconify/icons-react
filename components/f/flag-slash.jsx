import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c3f_t1esf.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c3f_t1esf"/>`,
		"fallback": "f7:flag-slash",
	});
}

export default Component;
