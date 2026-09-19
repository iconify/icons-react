import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xidz24b6s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xidz24b6s"/>`,
		"fallback": "heroicons:currency-pound",
	});
}

export default Component;
