import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mt60lmigj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mt60lmigj"/>`,
		"fallback": "hugeicons:haze",
	});
}

export default Component;
