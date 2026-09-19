import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c_35_czod.css';
import '../../css/e/efsylsb0d.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c_35_czod"/><path class="efsylsb0d"/>`,
		"fallback": "carbon:chevron-down-outline",
	});
}

export default Component;
