import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zg-f40bff.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zg-f40bff"/>`,
		"fallback": "tabler:fire-extinguisher",
	});
}

export default Component;
