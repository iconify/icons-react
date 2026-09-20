import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yjnn37b9t.css';
import '../../css/q/q2qjyxbjj.css';
import '../../css/n/nmxyf3bqj.css';
import '../../css/b/bz7kufbhr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yjnn37b9t"/><path class="q2qjyxbjj"/><path class="nmxyf3bqj"/><path class="bz7kufbhr"/></g>`,
		"fallback": "streamline-kameleon-color:construction-blueprint",
	});
}

export default Component;
