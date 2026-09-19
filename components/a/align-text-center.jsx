import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lzsycdghx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lzsycdghx"/>`,
		"fallback": "icon-park-outline:align-text-center",
	});
}

export default Component;
