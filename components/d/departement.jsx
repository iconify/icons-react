import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zntl3sptn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zntl3sptn"/>`,
		"fallback": "hugeicons:departement",
	});
}

export default Component;
