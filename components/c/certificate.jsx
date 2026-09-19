import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h0y0atbdb.css';

const viewBox = {"width":1536,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h0y0atbdb"/>`,
		"fallback": "fa:certificate",
	});
}

export default Component;
