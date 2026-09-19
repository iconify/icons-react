import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zvxsaw3yt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zvxsaw3yt"/>`,
		"fallback": "cil:border-top",
	});
}

export default Component;
