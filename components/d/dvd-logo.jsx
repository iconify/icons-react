import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zd5y7vbjg.css';
import '../../css/x/x5qxkepnv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zd5y7vbjg"/><path class="x5qxkepnv"/>`,
		"fallback": "flat-color-icons:dvd-logo",
	});
}

export default Component;
