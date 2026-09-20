import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oksndebjn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oksndebjn"/>`,
		"fallback": "mynaui:brand-x",
	});
}

export default Component;
