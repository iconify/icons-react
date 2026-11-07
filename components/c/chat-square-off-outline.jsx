import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a2j0411cb.css';
import '../../css/r/rormt7btc.css';
import '../../css/n/nn1-acc4f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a2j0411cb"/><path class="rormt7btc"/><path class="nn1-acc4f"/>`,
		"fallback": "solar:chat-square-off-outline",
	});
}

export default Component;
