import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i8hrjq-xz.css';
import '../../css/u/uaje_hxks.css';
import '../../css/f/fybuv2jvo.css';
import '../../css/p/ppols2b6o.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i8hrjq-xz"/><path class="uaje_hxks"/><path class="fybuv2jvo"/><path class="ppols2b6o"/>`,
		"fallback": "energy-icons:e-motorcycle-20",
	});
}

export default Component;
