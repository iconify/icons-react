import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gr80_bo_v.css';

const viewBox = {"width":1200,"height":1200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gr80_bo_v"/>`,
		"fallback": "el:hand-down",
	});
}

export default Component;
