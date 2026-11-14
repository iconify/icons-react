import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dhi8vggfh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dhi8vggfh"/>`,
		"fallback": "hugeicons:folder-plus",
	});
}

export default Component;
