import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tzpfhccmd.css';
import '../../css/y/yg46shszw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tzpfhccmd"/><path class="yg46shszw"/>`,
		"fallback": "solar:cursor-bold-duotone",
	});
}

export default Component;
