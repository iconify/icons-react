import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/of8ozpb-y.css';
import '../../css/n/nk1dwkb8d.css';
import '../../css/t/tm6yvh82x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="of8ozpb-y"/><path class="nk1dwkb8d"/><path class="tm6yvh82x"/>`,
		"fallback": "energy-icons:helideck-48-bold",
	});
}

export default Component;
