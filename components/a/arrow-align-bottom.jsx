import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/l/l3xoro.css';
import '../../css/n/nazh2e.css';
import '../../css/q/qv8hvr.css';
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
		"content": `<path class="a0m25c l3xoro"/><path class="a0m25c nazh2e"/><path class="a0m25c qv8hvr"/>`,
		"fallback": "line-md:arrow-align-bottom",
	});
}

export default Component;
