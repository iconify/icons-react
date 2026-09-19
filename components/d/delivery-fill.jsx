import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kia8xccll.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kia8xccll"/>`,
		"fallback": "iconamoon:delivery-fill",
	});
}

export default Component;
