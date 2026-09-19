import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zr9y6zxld.css';

const viewBox = {"width":1200,"height":1200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zr9y6zxld"/>`,
		"fallback": "el:bookmark",
	});
}

export default Component;
