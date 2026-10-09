import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ceecc4bcw.css';
import '../../css/d/d6cvwtbsp.css';
import '../../css/s/sadwe2bbu.css';
import '../../css/x/xivft9bkh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ceecc4bcw"/><path class="d6cvwtbsp"/><path class="sadwe2bbu"/><path class="xivft9bkh"/>`,
		"fallback": "energy-icons:biomethane-plant-48-bold",
	});
}

export default Component;
