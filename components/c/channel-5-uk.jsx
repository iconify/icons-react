import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x3rh6sb_d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x3rh6sb_d"/>`,
		"fallback": "cbi:channel-5-uk",
	});
}

export default Component;
