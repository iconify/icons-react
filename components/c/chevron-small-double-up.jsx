import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/d/dljhve.css';
import '../../css/u/uwhkmb.css';
import '../../css/s/so-from-10.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c dljhve"/><path class="a0m25c uwhkmb"/>`,
		"fallback": "line-md:chevron-small-double-up",
	});
}

export default Component;
