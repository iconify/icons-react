import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j3l4fgb5a.css';
import '../../css/k/k8xg7x5nk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j3l4fgb5a"/><path class="k8xg7x5nk"/>`,
		"fallback": "boxicons:buildings-filled",
	});
}

export default Component;
