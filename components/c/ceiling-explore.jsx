import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/ssc2c_b5d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ssc2c_b5d"/>`,
		"fallback": "cbi:ceiling-explore",
	});
}

export default Component;
