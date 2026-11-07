import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s8d1qvbbx.css';
import '../../css/j/jtg24db_i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s8d1qvbbx"/><path class="jtg24db_i"/>`,
		"fallback": "solar:delivery-bold-duotone",
	});
}

export default Component;
