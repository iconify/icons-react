import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in162uvwq.css';
import '../../css/z/z9-tvgwsm.css';
import '../../css/f/fmp483bli.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="in162uvwq"/><path class="z9-tvgwsm"/><path class="fmp483bli"/>`,
		"fallback": "energy-icons:folder-tree-20",
	});
}

export default Component;
