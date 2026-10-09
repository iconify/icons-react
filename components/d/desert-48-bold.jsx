import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gdhm6x6mb.css';
import '../../css/h/hlfitnjnv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gdhm6x6mb"/><path class="hlfitnjnv"/>`,
		"fallback": "energy-icons:desert-48-bold",
	});
}

export default Component;
