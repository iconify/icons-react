import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ohs7hsjpb.css';
import '../../css/s/sdzy7xbyh.css';
import '../../css/j/j3w9z2dlq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ohs7hsjpb"/><path class="sdzy7xbyh"/><path class="j3w9z2dlq"/>`,
		"fallback": "energy-icons:fire-engine-48",
	});
}

export default Component;
