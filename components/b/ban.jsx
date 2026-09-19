import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lv7u48b6l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lv7u48b6l"/>`,
		"fallback": "fa6-solid:ban",
	});
}

export default Component;
