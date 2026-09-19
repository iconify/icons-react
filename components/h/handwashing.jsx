import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ydmsz_o0s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ydmsz_o0s"/>`,
		"fallback": "icon-park-outline:handwashing",
	});
}

export default Component;
