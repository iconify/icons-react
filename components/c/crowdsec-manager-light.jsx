import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m40w_1l6w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m40w_1l6w"/>`,
		"fallback": "selfhst:crowdsec-manager-light",
	});
}

export default Component;
