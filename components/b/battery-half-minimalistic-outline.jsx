import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vun0ddrph.css';
import '../../css/s/sv57hgpcx.css';
import '../../css/i/iin1g9v9i.css';
import '../../css/x/x1rqnf35i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vun0ddrph"/><path class="sv57hgpcx"/><path clip-rule="evenodd" class="iin1g9v9i"/><path class="x1rqnf35i"/></g>`,
		"fallback": "solar:battery-half-minimalistic-outline",
	});
}

export default Component;
