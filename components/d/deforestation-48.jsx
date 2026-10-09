import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/psjcnq9zk.css';
import '../../css/l/l0jza5bzv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="psjcnq9zk"/><path class="l0jza5bzv"/>`,
		"fallback": "energy-icons:deforestation-48",
	});
}

export default Component;
