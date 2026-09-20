import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/o/ockota.css';
import '../../css/c/ckfi2i.css';
import '../../css/s/so-from-28.css';
import '../../css/f/fade-to-1.css';
import '../../css/d/d-z2xg2d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c ockota"/><path class="a0m25c ckfi2i"/>`,
		"fallback": "line-md:hazard-lights",
	});
}

export default Component;
