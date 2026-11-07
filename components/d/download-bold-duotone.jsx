import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zej5dm5-i.css';
import '../../css/a/abnnwxzhi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zej5dm5-i"/><path clip-rule="evenodd" class="abnnwxzhi"/>`,
		"fallback": "solar:download-bold-duotone",
	});
}

export default Component;
