import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ujyzd5b5y.css';

const viewBox = {"width":1200,"height":1200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ujyzd5b5y"/>`,
		"fallback": "el:dribbble",
	});
}

export default Component;
