import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xg-biwbzh.css';
import '../../css/h/h1lg0z1zs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xg-biwbzh"/><path class="h1lg0z1zs"/>`,
		"fallback": "energy-icons:connector-chademo-48",
	});
}

export default Component;
