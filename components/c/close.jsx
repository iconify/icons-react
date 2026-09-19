import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-r2anv0v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m-r2anv0v"/>`,
		"fallback": "icon-park-outline:close",
	});
}

export default Component;
