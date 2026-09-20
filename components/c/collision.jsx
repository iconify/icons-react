import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z-r2a1tbt.css';
import '../../css/x/x3dutabuk.css';
import '../../css/t/t7bcvwf8i.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z-r2a1tbt"/><path class="x3dutabuk"/><path class="t7bcvwf8i"/>`,
		"fallback": "openmoji:collision",
	});
}

export default Component;
