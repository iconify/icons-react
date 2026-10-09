import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zdt97jb-t.css';
import '../../css/x/xj1iovt4w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zdt97jb-t"/><path class="xj1iovt4w"/>`,
		"fallback": "energy-icons:corner-right-up-48",
	});
}

export default Component;
