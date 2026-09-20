import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ck1sin1dx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ck1sin1dx"/>`,
		"fallback": "ix:gauge",
	});
}

export default Component;
