import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qdznddjex.css';
import '../../css/n/n4fvzrmzg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qdznddjex"/><path class="n4fvzrmzg"/>`,
		"fallback": "bx:bxs-shopping-bags",
	});
}

export default Component;
