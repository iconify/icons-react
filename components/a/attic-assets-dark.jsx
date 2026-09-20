import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ekx1x_bqx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ekx1x_bqx"/>`,
		"fallback": "selfhst:attic-assets-dark",
	});
}

export default Component;
