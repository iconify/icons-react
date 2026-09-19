import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gvk1-n9_p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gvk1-n9_p"/>`,
		"fallback": "griddy-icons:edit-line",
	});
}

export default Component;
