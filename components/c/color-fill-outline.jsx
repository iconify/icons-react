import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xp22x-rfh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xp22x-rfh"/>`,
		"fallback": "ion:color-fill-outline",
	});
}

export default Component;
