import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bwan62b2v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bwan62b2v"/>`,
		"fallback": "selfhst:certshell-light",
	});
}

export default Component;
