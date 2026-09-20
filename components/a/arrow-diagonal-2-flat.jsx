import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fgnaupfol.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fgnaupfol"/>`,
		"fallback": "streamline-plump-color:arrow-diagonal-2-flat",
	});
}

export default Component;
