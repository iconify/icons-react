import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dxghssbvs.css';
import '../../css/q/ql_va_b8t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dxghssbvs"/><path clip-rule="evenodd" class="ql_va_b8t"/>`,
		"fallback": "solar:folder-clock-bold",
	});
}

export default Component;
