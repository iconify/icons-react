import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dpl224b5a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dpl224b5a"/>`,
		"fallback": "cbi:chromecast",
	});
}

export default Component;
