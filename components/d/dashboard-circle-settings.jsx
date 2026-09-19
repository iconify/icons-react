import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/toj71gdzg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="toj71gdzg"/>`,
		"fallback": "hugeicons:dashboard-circle-settings",
	});
}

export default Component;
