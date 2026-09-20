import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jd17v2bbm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jd17v2bbm"/>`,
		"fallback": "selfhst:grist-light",
	});
}

export default Component;
