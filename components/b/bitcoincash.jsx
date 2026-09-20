import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ahqnmf6qa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ahqnmf6qa"/>`,
		"fallback": "simple-icons:bitcoincash",
	});
}

export default Component;
