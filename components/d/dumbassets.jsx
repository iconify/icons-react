import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j29moabpi.css';
import '../../css/e/etvlrmq6u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="j29moabpi"/><path class="etvlrmq6u"/>`,
		"fallback": "selfhst:dumbassets",
	});
}

export default Component;
