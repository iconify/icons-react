import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bdc73lbzg.css';
import '../../css/u/uqg7dcvvc.css';
import '../../css/k/kareh6bge.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bdc73lbzg"/><path class="uqg7dcvvc"/><path class="kareh6bge"/>`,
		"fallback": "energy-icons:guitar-48",
	});
}

export default Component;
