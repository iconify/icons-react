import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d8wp0nbtd.css';
import '../../css/m/m5ioxlbxu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d8wp0nbtd"/><path class="m5ioxlbxu"/>`,
		"fallback": "bx:file",
	});
}

export default Component;
