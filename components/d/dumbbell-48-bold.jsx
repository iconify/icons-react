import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vl8r3viay.css';
import '../../css/q/qdpkq-bcf.css';
import '../../css/l/l89fhnblb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vl8r3viay"/><path class="qdpkq-bcf"/><path class="l89fhnblb"/>`,
		"fallback": "energy-icons:dumbbell-48-bold",
	});
}

export default Component;
