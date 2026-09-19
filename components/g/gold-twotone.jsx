import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q1wxr2brf.css';
import '../../css/x/x6-25tkfl.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q1wxr2brf"/><path class="x6-25tkfl"/>`,
		"fallback": "ant-design:gold-twotone",
	});
}

export default Component;
