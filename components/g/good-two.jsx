import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ef767dm3f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ef767dm3f"/>`,
		"fallback": "icon-park-outline:good-two",
	});
}

export default Component;
