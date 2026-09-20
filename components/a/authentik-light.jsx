import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tz5qhoa4b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tz5qhoa4b"/>`,
		"fallback": "selfhst:authentik-light",
	});
}

export default Component;
