import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bq0jd1b6k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bq0jd1b6k"/>`,
		"fallback": "mingcute:apple-fruit-fill",
	});
}

export default Component;
