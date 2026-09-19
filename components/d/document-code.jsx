import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/q4oyznpnc.css';
import '../../css/v/vuq47yb6d.css';
import '../../css/t/tlhsqgbia.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="q4oyznpnc"/><path class="vuq47yb6d"/><path class="tlhsqgbia"/></g>`,
		"fallback": "hugeicons:document-code",
	});
}

export default Component;
