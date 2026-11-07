import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a-y2ejbab.css';
import '../../css/s/sw2f4isvy.css';
import '../../css/h/hu8pwkj5u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="a-y2ejbab"/><path class="sw2f4isvy"/><path class="hu8pwkj5u"/>`,
		"fallback": "solar:closet-2-bold-duotone",
	});
}

export default Component;
