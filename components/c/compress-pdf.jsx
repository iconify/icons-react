import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fwd061b5c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fwd061b5c"/>`,
		"fallback": "streamline-plump:compress-pdf",
	});
}

export default Component;
