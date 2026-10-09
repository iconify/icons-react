import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ok-0u49zj.css';
import '../../css/w/wh24nx91b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ok-0u49zj"/><path class="wh24nx91b"/>`,
		"fallback": "energy-icons:battery-bolt-48-bold",
	});
}

export default Component;
