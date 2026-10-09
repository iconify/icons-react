import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xx2xmtbjn.css';
import '../../css/h/huzs6bryl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xx2xmtbjn"/><path class="huzs6bryl"/>`,
		"fallback": "energy-icons:chevron-left-square-48",
	});
}

export default Component;
