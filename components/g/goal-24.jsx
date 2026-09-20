import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qyymwqb4g.css';
import '../../css/t/tpjkktbyw.css';
import '../../css/t/ti2ukbbdr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qyymwqb4g"/><path class="tpjkktbyw"/><path class="ti2ukbbdr"/>`,
		"fallback": "octicon:goal-24",
	});
}

export default Component;
