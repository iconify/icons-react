import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/ns2jtkb0k.css';
import '../../css/i/ila43kb5l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ns2jtkb0k"/><path class="ila43kb5l"/></g>`,
		"fallback": "hugeicons:file-dollar",
	});
}

export default Component;
