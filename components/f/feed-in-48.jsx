import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/friknfboq.css';
import '../../css/v/v3-yombvq.css';
import '../../css/v/v403anbqu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="friknfboq"/><path class="v3-yombvq"/><path class="v403anbqu"/>`,
		"fallback": "energy-icons:feed-in-48",
	});
}

export default Component;
