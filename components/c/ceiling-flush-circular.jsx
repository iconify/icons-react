import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/klk31e80v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="klk31e80v"/>`,
		"fallback": "cbi:ceiling-flush-circular",
	});
}

export default Component;
