import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ftemw-a2c.css';
import '../../css/z/zfls42b1d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ftemw-a2c"/><path class="zfls42b1d"/>`,
		"fallback": "boxicons:cupboard-alt",
	});
}

export default Component;
