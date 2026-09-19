import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rsm8ocbmf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rsm8ocbmf"/>`,
		"fallback": "carbon:foundation-model",
	});
}

export default Component;
