import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zqs759a1z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zqs759a1z"/>`,
		"fallback": "streamline-plump:feather-pen-solid",
	});
}

export default Component;
