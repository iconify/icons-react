import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nnj8zni5c.css';
import '../../css/q/qo_wu9b5d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nnj8zni5c"/><path clip-rule="evenodd" class="qo_wu9b5d"/>`,
		"fallback": "solar:case-minimalistic-bold",
	});
}

export default Component;
