import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eqwcfqb8j.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eqwcfqb8j"/>`,
		"fallback": "fa6-regular:face-grin-tears",
	});
}

export default Component;
