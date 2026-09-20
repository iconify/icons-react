import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z4ob6t.css';
import '../../css/s/so-from-10.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z4ob6t"/>`,
		"fallback": "line-md:chevron-small-right",
	});
}

export default Component;
