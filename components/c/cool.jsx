import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m4kxdbbjk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m4kxdbbjk"/>`,
		"fallback": "icon-park-outline:cool",
	});
}

export default Component;
