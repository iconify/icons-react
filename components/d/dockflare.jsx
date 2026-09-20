import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lom97gbaa.css';
import '../../css/h/h1tep8bkz.css';
import '../../css/j/juyi11biy.css';
import '../../css/r/r5ke03bht.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lom97gbaa"/><path class="h1tep8bkz"/><path class="juyi11biy"/><path class="r5ke03bht"/>`,
		"fallback": "selfhst:dockflare",
	});
}

export default Component;
