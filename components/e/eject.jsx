import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wb6w09bir.css';
import '../../css/o/o8fo-jx8b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wb6w09bir"/><path class="o8fo-jx8b"/>`,
		"fallback": "ion:eject",
	});
}

export default Component;
