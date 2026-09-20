import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oh6_ibb5v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="oh6_ibb5v"/>`,
		"fallback": "streamline-plump:atom-solid",
	});
}

export default Component;
