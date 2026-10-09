import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rfmifebfq.css';
import '../../css/c/c4iz7xb8s.css';
import '../../css/q/qdy37eb-k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rfmifebfq"/><path class="c4iz7xb8s"/><path class="qdy37eb-k"/>`,
		"fallback": "energy-icons:arrow-left-right-48-bold",
	});
}

export default Component;
