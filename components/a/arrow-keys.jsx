import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i-tlr5n-v.css';
import '../../css/y/ywjn0acze.css';
import '../../css/j/ju-k3ebwv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i-tlr5n-v"/><path class="ywjn0acze"/><path class="ju-k3ebwv"/></g>`,
		"fallback": "icon-park-outline:arrow-keys",
	});
}

export default Component;
