import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mv301jogn.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mv301jogn"/>`,
		"fallback": "fa6-solid:envelopes-bulk",
	});
}

export default Component;
