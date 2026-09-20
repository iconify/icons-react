import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/u/uzg0oh.css';
import '../../css/n/nzn0tq.css';
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
		"content": `<path class="a0m25c uzg0oh"/><path class="a0m25c nzn0tq"/>`,
		"fallback": "line-md:chevron-small-double-left",
	});
}

export default Component;
