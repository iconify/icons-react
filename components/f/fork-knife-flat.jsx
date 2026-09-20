import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gf9aldbfi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gf9aldbfi"/>`,
		"fallback": "streamline-plump-color:fork-knife-flat",
	});
}

export default Component;
