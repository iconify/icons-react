import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lp7lv3bay.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lp7lv3bay"/>`,
		"fallback": "simple-line-icons:event",
	});
}

export default Component;
