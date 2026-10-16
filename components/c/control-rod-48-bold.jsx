import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xszdr5bbz.css';
import '../../css/k/klmj08ban.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xszdr5bbz"/><path class="klmj08ban"/>`,
		"fallback": "energy-icons:control-rod-48-bold",
	});
}

export default Component;
