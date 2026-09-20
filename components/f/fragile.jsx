import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/l/le1d4bcqy.css';
import '../../css/c/c-jy6ibsi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="le1d4bcqy"/><path class="c-jy6ibsi"/></g>`,
		"fallback": "streamline-plump-color:fragile",
	});
}

export default Component;
