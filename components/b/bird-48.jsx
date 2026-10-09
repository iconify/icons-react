import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zx67jlagk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zx67jlagk"/>`,
		"fallback": "energy-icons:bird-48",
	});
}

export default Component;
