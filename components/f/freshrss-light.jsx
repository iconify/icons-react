import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aayokxb-n.css';
import '../../css/r/r98oq0j7y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aayokxb-n"/><path class="r98oq0j7y"/>`,
		"fallback": "selfhst:freshrss-light",
	});
}

export default Component;
