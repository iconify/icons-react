import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gvw901bjd.css';
import '../../css/k/k468snbzm.css';
import '../../css/r/rqpbbk94c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gvw901bjd"/><path class="k468snbzm"/><path class="rqpbbk94c"/>`,
		"fallback": "selfhst:google-messages",
	});
}

export default Component;
