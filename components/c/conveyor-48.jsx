import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a-q4zlgza.css';
import '../../css/g/g6-ekr0nj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a-q4zlgza"/><path class="g6-ekr0nj"/>`,
		"fallback": "energy-icons:conveyor-48",
	});
}

export default Component;
