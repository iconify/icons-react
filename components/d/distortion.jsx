import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b18_34_hl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b18_34_hl"/>`,
		"fallback": "icon-park-outline:distortion",
	});
}

export default Component;
