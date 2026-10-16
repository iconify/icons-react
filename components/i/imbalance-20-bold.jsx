import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mdounc8nc.css';
import '../../css/i/il9s_hbni.css';
import '../../css/p/p5uqo6r1z.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mdounc8nc"/><path class="il9s_hbni"/><path class="p5uqo6r1z"/>`,
		"fallback": "energy-icons:imbalance-20-bold",
	});
}

export default Component;
