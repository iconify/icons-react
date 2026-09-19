import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f3utn-y9c.css';
import '../../css/j/jjp5tkp_h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f3utn-y9c"/><path class="jjp5tkp_h"/>`,
		"fallback": "boxicons:bug-alt",
	});
}

export default Component;
