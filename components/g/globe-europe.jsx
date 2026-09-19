import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/amvdw8b4x.css';
import '../../css/o/om9xhncdy.css';
import '../../css/h/h-ythmv4x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="amvdw8b4x"/><path class="om9xhncdy"/><path class="h-ythmv4x"/>`,
		"fallback": "boxicons:globe-europe",
	});
}

export default Component;
