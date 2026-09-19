import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rxgit7ceq.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rxgit7ceq"/>`,
		"fallback": "fa-solid:dumpster",
	});
}

export default Component;
