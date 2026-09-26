import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h_mp64bbq.css';
import '../../css/k/kkfcr7igq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="h_mp64bbq"/><path class="kkfcr7igq"/></g>`,
		"fallback": "solar:arrow-up-to-line-bold-duotone",
	});
}

export default Component;
