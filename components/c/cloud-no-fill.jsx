import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fev55i10z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fev55i10z"/>`,
		"fallback": "iconamoon:cloud-no-fill",
	});
}

export default Component;
