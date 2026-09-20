import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v4i2ew1ke.css';
import '../../css/i/im-u8ub-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="v4i2ew1ke"/><path clip-rule="evenodd" class="im-u8ub-i"/>`,
		"fallback": "lets-icons:gps-fixed-duotone",
	});
}

export default Component;
