import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/skw6qbb9b.css';
import '../../css/z/ztdjq8bbv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="skw6qbb9b"/><path class="ztdjq8bbv"/>`,
		"fallback": "energy-icons:distribution-board-20-bold",
	});
}

export default Component;
