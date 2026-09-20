import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/k/k3t7if20f.css';
import '../../css/c/ca81gdbxj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="k3t7if20f"/><path class="ca81gdbxj"/></g>`,
		"fallback": "streamline-plump-color:coffee-mug",
	});
}

export default Component;
