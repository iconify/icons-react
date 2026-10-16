import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yefgfcbum.css';
import '../../css/w/wp8j1tmrq.css';
import '../../css/r/rb9owibwy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yefgfcbum"/><path class="wp8j1tmrq"/><path class="rb9owibwy"/>`,
		"fallback": "energy-icons:file-clock-48-bold",
	});
}

export default Component;
