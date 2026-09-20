import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x-kw0fbqz.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x-kw0fbqz"/>`,
		"fallback": "lineicons:bug",
	});
}

export default Component;
