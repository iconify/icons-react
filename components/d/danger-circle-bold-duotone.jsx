import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gt4erfbgl.css';
import '../../css/i/iqdm2xbfi.css';
import '../../css/x/x41xvfi0c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gt4erfbgl"/><path class="iqdm2xbfi"/><path class="x41xvfi0c"/>`,
		"fallback": "solar:danger-circle-bold-duotone",
	});
}

export default Component;
