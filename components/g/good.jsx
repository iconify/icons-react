import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ro79hccfd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ro79hccfd"/>`,
		"fallback": "icon-park:good",
	});
}

export default Component;
