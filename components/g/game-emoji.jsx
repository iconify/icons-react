import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/glxisr4qt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="glxisr4qt"/>`,
		"fallback": "icon-park-outline:game-emoji",
	});
}

export default Component;
