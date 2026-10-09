import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lbyywfnen.css';
import '../../css/h/hz4iidbyt.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lbyywfnen"/><path class="hz4iidbyt"/>`,
		"fallback": "energy-icons:baby-20-bold",
	});
}

export default Component;
