import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t7n7j88xq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t7n7j88xq"/>`,
		"fallback": "tabler:brand-mercedes",
	});
}

export default Component;
