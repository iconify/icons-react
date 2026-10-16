import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s3l0q_b-c.css';
import '../../css/q/qdnhae7pn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s3l0q_b-c"/><path class="qdnhae7pn"/>`,
		"fallback": "energy-icons:agv-48",
	});
}

export default Component;
