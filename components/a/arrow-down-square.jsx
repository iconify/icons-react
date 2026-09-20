import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/f/f5s6pk.css';
import '../../css/a/a-v8cn.css';
import '../../css/o/osy4ff.css';
import '../../css/s/so-from-66.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c f5s6pk"/><path class="a-v8cn a0m25c"/><path class="a0m25c osy4ff"/>`,
		"fallback": "line-md:arrow-down-square",
	});
}

export default Component;
