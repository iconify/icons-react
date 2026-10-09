import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a79qrsspc.css';
import '../../css/q/q26w3actz.css';
import '../../css/h/hn417qbqc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a79qrsspc"/><path class="q26w3actz"/><path class="hn417qbqc"/>`,
		"fallback": "energy-icons:engineer-48",
	});
}

export default Component;
