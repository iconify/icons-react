import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/p/pmw-rr.css';
import '../../css/h/h-ksjc.css';
import '../../css/s/so-from-60.css';
import '../../css/f/fade-to-1.css';
import '../../css/s/so-from-6.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c pmw-rr"/><path class="a0m25c h-ksjc"/>`,
		"fallback": "line-md:cloud-alt-tags",
	});
}

export default Component;
