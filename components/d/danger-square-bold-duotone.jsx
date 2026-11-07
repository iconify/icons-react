import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z2ynbdc9b.css';
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
		"content": `<path class="z2ynbdc9b"/><path class="iqdm2xbfi"/><path class="x41xvfi0c"/>`,
		"fallback": "solar:danger-square-bold-duotone",
	});
}

export default Component;
