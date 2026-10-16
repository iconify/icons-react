import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/twkhdebna.css';
import '../../css/n/n63jug8iu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="twkhdebna"/><path class="n63jug8iu"/>`,
		"fallback": "energy-icons:file-pen-48",
	});
}

export default Component;
