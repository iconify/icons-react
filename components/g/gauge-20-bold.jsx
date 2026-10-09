import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kbw4lkb5b.css';
import '../../css/o/o45kaobgy.css';
import '../../css/q/q38qvzq1q.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kbw4lkb5b"/><path class="o45kaobgy"/><path class="q38qvzq1q"/>`,
		"fallback": "energy-icons:gauge-20-bold",
	});
}

export default Component;
