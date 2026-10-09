import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l9t99pbvc.css';
import '../../css/f/flil27bwc.css';
import '../../css/t/tb6-f1eyw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l9t99pbvc"/><path class="flil27bwc"/><path class="tb6-f1eyw"/>`,
		"fallback": "energy-icons:beach-hut-20-bold",
	});
}

export default Component;
