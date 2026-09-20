import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9m42zb_p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y9m42zb_p"/>`,
		"fallback": "ix:ellipse-filled",
	});
}

export default Component;
