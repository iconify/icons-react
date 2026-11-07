import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iqdm2xbfi.css';
import '../../css/x/x41xvfi0c.css';
import '../../css/f/fhxzx1b_j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iqdm2xbfi"/><path class="x41xvfi0c"/><path clip-rule="evenodd" class="fhxzx1b_j"/>`,
		"fallback": "solar:danger-circle-outline",
	});
}

export default Component;
