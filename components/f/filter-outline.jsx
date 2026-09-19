import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mz-n4tbbk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mz-n4tbbk"/>`,
		"fallback": "basil:filter-outline",
	});
}

export default Component;
