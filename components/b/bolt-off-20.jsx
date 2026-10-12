import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oyv1r9bwx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oyv1r9bwx"/>`,
		"fallback": "energy-icons:bolt-off-20",
	});
}

export default Component;
