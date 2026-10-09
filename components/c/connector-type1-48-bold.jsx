import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q668lybvz.css';
import '../../css/w/wxvvsl_vi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q668lybvz"/><path class="wxvvsl_vi"/>`,
		"fallback": "energy-icons:connector-type1-48-bold",
	});
}

export default Component;
