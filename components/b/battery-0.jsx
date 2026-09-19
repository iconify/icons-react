import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dx_pg9buk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dx_pg9buk"/>`,
		"fallback": "heroicons:battery-0",
	});
}

export default Component;
