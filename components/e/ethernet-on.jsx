import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/s/s8pacjbfa.css';
import '../../css/p/pngjlzb0z.css';
import '../../css/g/gcdut9pir.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><rect class="s8pacjbfa"/><path class="pngjlzb0z"/><path class="gcdut9pir"/></g>`,
		"fallback": "icon-park-outline:ethernet-on",
	});
}

export default Component;
