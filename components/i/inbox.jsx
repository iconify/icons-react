import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ghn1gb57e.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ghn1gb57e"/>`,
		"fallback": "heroicons-solid:inbox",
	});
}

export default Component;
