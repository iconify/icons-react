import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/si1030bhs.css';
import '../../css/t/tozua4tpq.css';
import '../../css/z/zebyaelmq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="si1030bhs"/><path class="tozua4tpq"/><path class="zebyaelmq"/>`,
		"fallback": "energy-icons:badge-x-48-bold",
	});
}

export default Component;
