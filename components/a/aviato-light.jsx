import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dq59xfblw.css';
import '../../css/s/sakiijw5s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dq59xfblw"/><path class="sakiijw5s"/>`,
		"fallback": "selfhst:aviato-light",
	});
}

export default Component;
