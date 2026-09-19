import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rdy1rebht.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rdy1rebht"/>`,
		"fallback": "cbi:bambu-lab-alt",
	});
}

export default Component;
