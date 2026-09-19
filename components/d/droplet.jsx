import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pgb63nblv.css';
import '../../css/b/btx5mjbxt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pgb63nblv"/><path class="btx5mjbxt"/>`,
		"fallback": "fxemoji:droplet",
	});
}

export default Component;
