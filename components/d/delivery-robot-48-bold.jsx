import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/twlufw5gg.css';
import '../../css/w/wr4720bes.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="twlufw5gg"/><path class="wr4720bes"/>`,
		"fallback": "energy-icons:delivery-robot-48-bold",
	});
}

export default Component;
