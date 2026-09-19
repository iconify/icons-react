import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pg1t_dv8x.css';
import '../../css/c/cgf21cybt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pg1t_dv8x"/><path clip-rule="evenodd" class="cgf21cybt"/>`,
		"fallback": "basil:file-download-outline",
	});
}

export default Component;
