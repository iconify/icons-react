import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/a/a_ekwb.css';
import '../../css/j/j4akdb.css';
import '../../css/s/so-from-14.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c a_ekwb"/><path class="a0m25c j4akdb"/>`,
		"fallback": "line-md:arrows-horizontal",
	});
}

export default Component;
