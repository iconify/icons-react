import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d4n39ub0l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="d4n39ub0l"/>`,
		"fallback": "streamline-plump-color:ampersand-flat",
	});
}

export default Component;
