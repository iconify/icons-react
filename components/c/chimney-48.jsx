import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bwcuq_bqp.css';
import '../../css/y/yb3rr1f2s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bwcuq_bqp"/><path class="yb3rr1f2s"/>`,
		"fallback": "energy-icons:chimney-48",
	});
}

export default Component;
