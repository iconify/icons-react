import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umn82f6mz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="umn82f6mz"/>`,
		"fallback": "hugeicons:border-left-02",
	});
}

export default Component;
