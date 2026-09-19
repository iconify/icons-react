import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vgrfg_3le.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vgrfg_3le"/>`,
		"fallback": "cbi:apple-airpods-pro",
	});
}

export default Component;
