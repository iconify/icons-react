import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/knx2mmctr.css';
import '../../css/g/g8p6evbep.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="knx2mmctr"/><path class="g8p6evbep"/>`,
		"fallback": "energy-icons:deforestation-20",
	});
}

export default Component;
