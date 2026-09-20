import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yz58fnbwx.css';
import '../../css/x/x4shk053m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yz58fnbwx"/><path class="x4shk053m"/>`,
		"fallback": "token:apex",
	});
}

export default Component;
