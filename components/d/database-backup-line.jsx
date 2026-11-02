import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/arg93t4-c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="arg93t4-c"/>`,
		"fallback": "mingcute:database-backup-line",
	});
}

export default Component;
