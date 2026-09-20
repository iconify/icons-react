import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rb2ayacaz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rb2ayacaz"/>`,
		"fallback": "selfhst:2fauth-dark",
	});
}

export default Component;
