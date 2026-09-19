import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tpq9aybfq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tpq9aybfq"/>`,
		"fallback": "heroicons:folder-open",
	});
}

export default Component;
