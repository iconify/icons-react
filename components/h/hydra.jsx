import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/ssrgvpbcq.css';
import '../../css/m/mrxx9-b_x.css';
import '../../css/i/i8w3f8bzf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ssrgvpbcq"/><path class="mrxx9-b_x"/><path class="i8w3f8bzf"/>`,
		"fallback": "token:hydra",
	});
}

export default Component;
