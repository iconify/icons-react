import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zdpmiccce.css';
import '../../css/i/i6it53bol.css';
import '../../css/i/i1z6z-v6i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zdpmiccce"/><path class="i6it53bol"/><path class="i1z6z-v6i"/>`,
		"fallback": "energy-icons:ice-melt-48",
	});
}

export default Component;
