import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zfiw6xiub.css';
import '../../css/m/mfnnmcbqi.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zfiw6xiub"/><path class="mfnnmcbqi"/>`,
		"fallback": "carbon:condition-point",
	});
}

export default Component;
