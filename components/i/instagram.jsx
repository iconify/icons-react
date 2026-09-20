import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/h/hdrl-z.css';
import '../../css/a/a97wxd.css';
import '../../css/p/p-0kvr.css';
import '../../css/s/so-from-66.css';
import '../../css/s/so-to-0.css';
import '../../css/f/fade-to-1.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c hdrl-z"/><path class="a0m25c a97wxd"/><circle class="p-0kvr"/>`,
		"fallback": "line-md:instagram",
	});
}

export default Component;
