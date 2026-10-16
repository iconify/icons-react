import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mg0d9fh6u.css';
import '../../css/c/c_b1bdc7i.css';
import '../../css/e/e5bjqi7bk.css';
import '../../css/q/qhh6ftvhk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mg0d9fh6u"/><path class="c_b1bdc7i"/><path class="e5bjqi7bk"/><path class="qhh6ftvhk"/>`,
		"fallback": "energy-icons:camera-switch-20-bold",
	});
}

export default Component;
