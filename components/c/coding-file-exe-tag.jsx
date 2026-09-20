import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k_e5embpi.css';
import '../../css/z/z-1o8dzhg.css';
import '../../css/y/yjv1a9s6g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="k_e5embpi"/><path clip-rule="evenodd" class="z-1o8dzhg"/><path class="yjv1a9s6g"/>`,
		"fallback": "streamline-freehand:coding-file-exe-tag",
	});
}

export default Component;
