import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j9t8vtbkq.css';
import '../../css/e/ehctdyb7u.css';
import '../../css/k/kirooxbcf.css';
import '../../css/t/tuxlwzigf.css';
import '../../css/y/y8bk7cxtz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j9t8vtbkq"/><path class="ehctdyb7u"/><path class="kirooxbcf"/><path class="tuxlwzigf"/><path class="y8bk7cxtz"/>`,
		"fallback": "energy-icons:drone-48-bold",
	});
}

export default Component;
