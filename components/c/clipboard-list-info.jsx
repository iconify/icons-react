import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tlrx-lbei.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tlrx-lbei"/>`,
		"fallback": "noviair:clipboard-list-info",
	});
}

export default Component;
