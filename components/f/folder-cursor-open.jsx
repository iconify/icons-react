import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b2nej9lxq.css';
import '../../css/q/qlmknyb9f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b2nej9lxq"/><path class="qlmknyb9f"/>`,
		"fallback": "catppuccin:folder-cursor-open",
	});
}

export default Component;
