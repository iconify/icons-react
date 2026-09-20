import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zjs8erx3y.css';
import '../../css/c/cwxu7xb2c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zjs8erx3y"/><path class="cwxu7xb2c"/>`,
		"fallback": "selfhst:firewalla",
	});
}

export default Component;
