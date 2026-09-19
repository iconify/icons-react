import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/grf5u8f1n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="grf5u8f1n"/>`,
		"fallback": "icon-park-outline:efferent-four",
	});
}

export default Component;
