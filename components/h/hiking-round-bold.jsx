import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kmd2tzwfv.css';
import '../../css/c/c_tiz1b-n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kmd2tzwfv"/><path clip-rule="evenodd" class="c_tiz1b-n"/>`,
		"fallback": "solar:hiking-round-bold",
	});
}

export default Component;
