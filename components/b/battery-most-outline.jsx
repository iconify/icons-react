import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/icho3y_ph.css';
import '../../css/m/mthptgvbg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="icho3y_ph"/><path clip-rule="evenodd" class="mthptgvbg"/>`,
		"fallback": "basil:battery-most-outline",
	});
}

export default Component;
