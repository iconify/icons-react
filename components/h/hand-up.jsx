import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9y9qbl1r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s9y9qbl1r"/>`,
		"fallback": "bxs:hand-up",
	});
}

export default Component;
