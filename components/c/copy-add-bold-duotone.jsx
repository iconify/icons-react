import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mtplmt03a.css';
import '../../css/p/p6laxfbun.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mtplmt03a"/><path clip-rule="evenodd" class="p6laxfbun"/>`,
		"fallback": "solar:copy-add-bold-duotone",
	});
}

export default Component;
