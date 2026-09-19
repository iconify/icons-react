import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jk5kzdb7t.css';

const viewBox = {"width":320,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jk5kzdb7t"/>`,
		"fallback": "fa6-solid:6",
	});
}

export default Component;
