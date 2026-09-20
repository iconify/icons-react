import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mnlh_2gfq.css';
import '../../css/u/uqv04wb6h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mnlh_2gfq"/><path class="uqv04wb6h"/>`,
		"fallback": "token:crowd",
	});
}

export default Component;
