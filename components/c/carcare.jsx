import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x_an92bjh.css';
import '../../css/a/aj2v-hbjk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x_an92bjh"/><path class="aj2v-hbjk"/>`,
		"fallback": "selfhst:carcare",
	});
}

export default Component;
