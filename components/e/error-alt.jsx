import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/leqoybczl.css';
import '../../css/z/zx6m1cc1t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="leqoybczl"/><path class="zx6m1cc1t"/>`,
		"fallback": "bx:error-alt",
	});
}

export default Component;
