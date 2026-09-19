import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cgvrc_86n.css';
import '../../css/k/knx35mxfw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cgvrc_86n"/><path class="knx35mxfw"/>`,
		"fallback": "boxicons:donate-heart",
	});
}

export default Component;
