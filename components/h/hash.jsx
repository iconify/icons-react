import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/h/h4mqdv.css';
import '../../css/o/o4_xet.css';
import '../../css/x/xmkx1n.css';
import '../../css/r/rw5kru.css';
import '../../css/s/so-from-20.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c h4mqdv"/><path class="a0m25c o4_xet"/><path class="a0m25c xmkx1n"/><path class="a0m25c rw5kru"/>`,
		"fallback": "line-md:hash",
	});
}

export default Component;
