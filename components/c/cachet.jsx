import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mf4em36ny.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mf4em36ny"/>`,
		"fallback": "selfhst:cachet",
	});
}

export default Component;
