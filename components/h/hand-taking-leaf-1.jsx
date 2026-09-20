import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vhl0h1bhb.css';
import '../../css/j/jcs27cipf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vhl0h1bhb"/><path class="jcs27cipf"/>`,
		"fallback": "lineicons:hand-taking-leaf-1",
	});
}

export default Component;
