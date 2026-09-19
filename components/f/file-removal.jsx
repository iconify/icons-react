import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rixf5zbgd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rixf5zbgd"/>`,
		"fallback": "icon-park-outline:file-removal",
	});
}

export default Component;
