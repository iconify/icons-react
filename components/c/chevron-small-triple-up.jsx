import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/b/bxli5t.css';
import '../../css/l/ln52_i.css';
import '../../css/f/fm8ssf.css';
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
		"content": `<path class="a0m25c bxli5t"/><path class="a0m25c ln52_i"/><path class="a0m25c fm8ssf"/>`,
		"fallback": "line-md:chevron-small-triple-up",
	});
}

export default Component;
