import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qqtyr2w2k.css';
import '../../css/h/hgpzimtyu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qqtyr2w2k"/><path class="hgpzimtyu"/>`,
		"fallback": "carbon:chart-error-bar-alt",
	});
}

export default Component;
