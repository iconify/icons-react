import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/izuh8ib-j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="izuh8ib-j"/>`,
		"fallback": "cbi:bulb-group-bollard-3-off",
	});
}

export default Component;
