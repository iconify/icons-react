import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/xkcaylbjy.css';
import '../../css/d/d4vm_9bok.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="xkcaylbjy"/><path class="d4vm_9bok"/></g>`,
		"fallback": "hugeicons:bitcoin-flashdisk",
	});
}

export default Component;
