import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h2e7xuh9q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h2e7xuh9q"/>`,
		"fallback": "reicon:docs2",
	});
}

export default Component;
