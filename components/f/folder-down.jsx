import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bugd6-bhq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bugd6-bhq"/>`,
		"fallback": "ix:folder-down",
	});
}

export default Component;
