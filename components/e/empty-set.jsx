import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/ss-s9gi8c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ss-s9gi8c"/>`,
		"fallback": "fa-solid:empty-set",
	});
}

export default Component;
