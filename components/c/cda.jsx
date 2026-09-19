import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v444rac2j.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v444rac2j"/>`,
		"fallback": "carbon:cda",
	});
}

export default Component;
