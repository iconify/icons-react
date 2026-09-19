import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r70k8h0fm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r70k8h0fm"/>`,
		"fallback": "hugeicons:folder-management",
	});
}

export default Component;
