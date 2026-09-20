import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vzqixot0a.css';
import '../../css/g/g66yx0zeq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vzqixot0a"/><path class="g66yx0zeq"/></g>`,
		"fallback": "tabler:bike-filled",
	});
}

export default Component;
