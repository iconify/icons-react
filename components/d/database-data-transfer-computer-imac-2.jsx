import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/n/nhg0mxb0k.css';
import '../../css/s/sitndgbiz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="nhg0mxb0k"/><path class="sitndgbiz"/></g>`,
		"fallback": "streamline-cyber:database-data-transfer-computer-imac-2",
	});
}

export default Component;
