import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uzih16b5q.css';
import '../../css/j/jgaaeabvy.css';
import '../../css/o/oz0-7c0kb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uzih16b5q"/><path class="jgaaeabvy"/><path class="oz0-7c0kb"/>`,
		"fallback": "energy-icons:beach-hut-48-bold",
	});
}

export default Component;
