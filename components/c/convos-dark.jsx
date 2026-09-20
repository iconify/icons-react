import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f--j959ay.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f--j959ay"/>`,
		"fallback": "selfhst:convos-dark",
	});
}

export default Component;
