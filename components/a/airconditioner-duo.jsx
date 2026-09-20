import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/ttbiemmoy.css';
import '../../css/o/oioitz8yu.css';
import '../../css/n/nhzwjvoaj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ttbiemmoy"/><path class="oioitz8yu"/><path class="nhzwjvoaj"/></g>`,
		"fallback": "streamline-kameleon-color:airconditioner-duo",
	});
}

export default Component;
