import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f7rxy07vv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f7rxy07vv"/>`,
		"fallback": "selfhst:creative-commons-light",
	});
}

export default Component;
