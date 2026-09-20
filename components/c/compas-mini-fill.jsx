import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/apckjcb2w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="apckjcb2w"/>`,
		"fallback": "lets-icons:compas-mini-fill",
	});
}

export default Component;
