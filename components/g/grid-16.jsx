import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ge94l3j4u.css';
import '../../css/p/p1-wg6b3c.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ge94l3j4u"/><path clip-rule="evenodd" class="p1-wg6b3c"/>`,
		"fallback": "qlementine-icons:grid-16",
	});
}

export default Component;
