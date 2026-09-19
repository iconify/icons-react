import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rzm9fwb_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rzm9fwb_a"/>`,
		"fallback": "cbi:aqara-t1",
	});
}

export default Component;
