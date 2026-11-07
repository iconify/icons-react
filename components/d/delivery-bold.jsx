import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ng9-olbui.css';
import '../../css/s/s8d1qvbbx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ng9-olbui"/><path class="s8d1qvbbx"/>`,
		"fallback": "solar:delivery-bold",
	});
}

export default Component;
