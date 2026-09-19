import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xwbs4bb2t.css';

const viewBox = {"width":432,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xwbs4bb2t"/>`,
		"fallback": "ps:delete",
	});
}

export default Component;
