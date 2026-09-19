import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xa0e86bup.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xa0e86bup"/>`,
		"fallback": "icon-park-outline:diving",
	});
}

export default Component;
