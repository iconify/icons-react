import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mq601vtik.css';
import '../../css/o/om7fi_u-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mq601vtik"/><path class="om7fi_u-e"/>`,
		"fallback": "token:glink",
	});
}

export default Component;
