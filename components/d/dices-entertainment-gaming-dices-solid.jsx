import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dr_nkcbfq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dr_nkcbfq"/>`,
		"fallback": "streamline-plump:dices-entertainment-gaming-dices-solid",
	});
}

export default Component;
