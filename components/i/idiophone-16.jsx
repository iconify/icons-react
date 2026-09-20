import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fbwe7mc1r.css';
import '../../css/k/kj3l2zbgf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fbwe7mc1r"/><path class="kj3l2zbgf"/>`,
		"fallback": "qlementine-icons:idiophone-16",
	});
}

export default Component;
