import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ixc561o8v.css';
import '../../css/q/qrgw_-b1m.css';
import '../../css/b/bc47oi3ue.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ixc561o8v"/><path class="qrgw_-b1m"/><path class="bc47oi3ue"/>`,
		"fallback": "octicon:duplicate-24",
	});
}

export default Component;
