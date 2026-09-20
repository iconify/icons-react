import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t2vr2vnyv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t2vr2vnyv"/>`,
		"fallback": "si:filter-list-fill",
	});
}

export default Component;
