import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vub7g5blo.css';
import '../../css/o/oxal30bwl.css';
import '../../css/f/foipgeybq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vub7g5blo wm-k"/><path class="oxal30bwl wm-k"/><path class="foipgeybq wm-s"/>`,
		"fallback": "withicons-bauhaus:cloud-off",
	});
}

export default Component;
