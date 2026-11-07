import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fudxizbvs.css';
import '../../css/x/x0_riwbbs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fudxizbvs"/><path class="x0_riwbbs"/>`,
		"fallback": "solar:glasses-bold-duotone",
	});
}

export default Component;
