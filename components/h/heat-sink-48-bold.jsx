import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g-y8ulbyu.css';
import '../../css/x/xovy7qr-g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g-y8ulbyu"/><path class="xovy7qr-g"/>`,
		"fallback": "energy-icons:heat-sink-48-bold",
	});
}

export default Component;
