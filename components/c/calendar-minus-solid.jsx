import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sqa3tkb1n.css';
import '../../css/g/go62nyfcr.css';
import '../../css/k/k91suv-ws.css';
import '../../css/i/icsy_rbek.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="sqa3tkb1n"><path class="go62nyfcr"/><path class="k91suv-ws"/><path class="icsy_rbek"/></g>`,
		"fallback": "iconoir:calendar-minus-solid",
	});
}

export default Component;
