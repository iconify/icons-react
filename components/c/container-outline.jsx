import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/us4-9fqqe.css';
import '../../css/o/o1z7omb5q.css';
import '../../css/f/fo4-y40vu.css';
import '../../css/s/sg53hmyvo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="us4-9fqqe"/><path class="o1z7omb5q"/><path class="fo4-y40vu"/><path class="sg53hmyvo"/>`,
		"fallback": "solar:container-outline",
	});
}

export default Component;
