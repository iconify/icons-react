import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/wu0eoenib.css';
import '../../css/a/a0s55-l6m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="wu0eoenib"/><path class="a0s55-l6m"/></g>`,
		"fallback": "solar:gamepad-no-charge-bold",
	});
}

export default Component;
