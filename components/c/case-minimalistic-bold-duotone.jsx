import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ydbsjp0mn.css';
import '../../css/u/uv9075bbf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ydbsjp0mn"/><path class="uv9075bbf"/>`,
		"fallback": "solar:case-minimalistic-bold-duotone",
	});
}

export default Component;
