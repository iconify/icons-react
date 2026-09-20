import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j6n6gll-a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j6n6gll-a"/>`,
		"fallback": "mdi:format-horizontal-align-centre",
	});
}

export default Component;
