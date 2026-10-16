import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mby54wt2i.css';
import '../../css/p/p-azqib5q.css';
import '../../css/m/mn7eeg1uo.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mby54wt2i"/><path class="p-azqib5q"/><path class="mn7eeg1uo"/>`,
		"fallback": "energy-icons:greenhouse-20",
	});
}

export default Component;
