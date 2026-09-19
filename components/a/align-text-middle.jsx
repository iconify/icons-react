import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zgl8xnb3r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zgl8xnb3r"/>`,
		"fallback": "icon-park-outline:align-text-middle",
	});
}

export default Component;
