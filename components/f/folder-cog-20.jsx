import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c3me-4caq.css';
import '../../css/w/wgtq23b2b.css';
import '../../css/i/i9p3igbhu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c3me-4caq"/><path class="wgtq23b2b"/><path class="i9p3igbhu"/>`,
		"fallback": "energy-icons:folder-cog-20",
	});
}

export default Component;
