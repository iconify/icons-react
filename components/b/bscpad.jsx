import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p_sdbxlje.css';
import '../../css/r/rs1l3rb9y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="p_sdbxlje"/><path class="rs1l3rb9y"/>`,
		"fallback": "token:bscpad",
	});
}

export default Component;
