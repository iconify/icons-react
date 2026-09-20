import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/h/hmd6rr.css';
import '../../css/d/dxl7-q.css';
import '../../css/r/ruuz6o.css';
import '../../css/k/kivm5z.css';
import '../../css/s/so-from-70.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c hmd6rr"/><path class="a0m25c dxl7-q"/><path class="a0m25c ruuz6o"/><path class="a0m25c kivm5z"/>`,
		"fallback": "line-md:chat",
	});
}

export default Component;
