import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lb1jiicvz.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lb1jiicvz"/>`,
		"fallback": "temaki:electronic",
	});
}

export default Component;
