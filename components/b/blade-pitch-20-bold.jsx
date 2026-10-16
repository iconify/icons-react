import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qokjj-kmj.css';
import '../../css/a/a8vsq7owx.css';
import '../../css/p/pu0j68bkc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qokjj-kmj"/><path class="a8vsq7owx"/><path class="pu0j68bkc"/>`,
		"fallback": "energy-icons:blade-pitch-20-bold",
	});
}

export default Component;
