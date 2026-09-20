import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/l/l3xoro.css';
import '../../css/w/witbny.css';
import '../../css/y/yauutu.css';
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
		"content": `<path class="a0m25c l3xoro"/><path class="a0m25c witbny"/><path class="a0m25c yauutu"/>`,
		"fallback": "line-md:arrow-open-up",
	});
}

export default Component;
