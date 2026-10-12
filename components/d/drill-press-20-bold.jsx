import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v19yd0bwi.css';
import '../../css/k/khpnrke8g.css';
import '../../css/k/kz95gib1r.css';
import '../../css/d/dsqatabik.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v19yd0bwi"/><path class="khpnrke8g"/><path class="kz95gib1r"/><path class="dsqatabik"/>`,
		"fallback": "energy-icons:drill-press-20-bold",
	});
}

export default Component;
