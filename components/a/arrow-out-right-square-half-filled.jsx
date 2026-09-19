import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tgz295blo.css';
import '../../css/g/g_z5fgbed.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tgz295blo"/><path class="g_z5fgbed"/>`,
		"fallback": "boxicons:arrow-out-right-square-half-filled",
	});
}

export default Component;
