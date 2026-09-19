import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ox5bagm_m.css';
import '../../css/z/z132mnbgz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ox5bagm_m"/><path class="z132mnbgz"/>`,
		"fallback": "boxicons:file-plus",
	});
}

export default Component;
