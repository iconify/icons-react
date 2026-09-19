import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aibzmo8rj.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aibzmo8rj"/>`,
		"fallback": "fa-solid:hand-holding",
	});
}

export default Component;
