import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ue1e12bsn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ue1e12bsn"/>`,
		"fallback": "keyline-icons:badge-info-fill",
	});
}

export default Component;
