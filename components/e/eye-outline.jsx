import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yjhtbdckh.css';
import '../../css/a/a7ajif61p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yjhtbdckh"/><circle class="a7ajif61p"/>`,
		"fallback": "famicons:eye-outline",
	});
}

export default Component;
