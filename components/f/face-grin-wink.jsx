import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xg8-xqbho.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xg8-xqbho"/>`,
		"fallback": "fa6-solid:face-grin-wink",
	});
}

export default Component;
