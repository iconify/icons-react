import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aljkuo7ct.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aljkuo7ct"/>`,
		"fallback": "fa6-regular:circle-check",
	});
}

export default Component;
