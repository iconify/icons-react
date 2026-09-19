import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bj8kg5b4r.css';

const viewBox = {"width":1200,"height":1200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bj8kg5b4r"/>`,
		"fallback": "el:address-book",
	});
}

export default Component;
