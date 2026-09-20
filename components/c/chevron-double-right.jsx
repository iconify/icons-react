import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/l/li_bep.css';
import '../../css/g/gvalnz.css';
import '../../css/s/so-from-12.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c li_bep"/><path class="a0m25c gvalnz"/>`,
		"fallback": "line-md:chevron-double-right",
	});
}

export default Component;
