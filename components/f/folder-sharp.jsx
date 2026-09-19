import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x4m17f5zf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x4m17f5zf"/>`,
		"fallback": "famicons:folder-sharp",
	});
}

export default Component;
