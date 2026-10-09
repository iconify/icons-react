import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oz0-7c0kb.css';
import '../../css/f/fpw9y5b6x.css';
import '../../css/h/hjih05f-k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oz0-7c0kb"/><path class="fpw9y5b6x"/><path class="hjih05f-k"/>`,
		"fallback": "energy-icons:analytics-48-bold",
	});
}

export default Component;
