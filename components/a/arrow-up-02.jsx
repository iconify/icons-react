import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xfjtvjbff.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xfjtvjbff"/>`,
		"fallback": "hugeicons:arrow-up-02",
	});
}

export default Component;
