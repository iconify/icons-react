import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cqmqxhpqk.css';
import '../../css/n/n5t4ppego.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cqmqxhpqk"/><path class="n5t4ppego"/>`,
		"fallback": "lineicons:bus-1",
	});
}

export default Component;
