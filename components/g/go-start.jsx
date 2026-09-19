import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sb-t67w8c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sb-t67w8c"/>`,
		"fallback": "icon-park-outline:go-start",
	});
}

export default Component;
