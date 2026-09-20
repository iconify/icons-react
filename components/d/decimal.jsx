import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bljd5e2en.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bljd5e2en"/>`,
		"fallback": "mdi:decimal",
	});
}

export default Component;
