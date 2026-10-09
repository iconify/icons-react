import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gnz3mvvay.css';
import '../../css/a/alv82-bvd.css';
import '../../css/y/yjyk2ddya.css';
import '../../css/h/h6as5h2ht.css';
import '../../css/m/mpnwbubfi.css';
import '../../css/k/kdumj4nzh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gnz3mvvay"/><path class="alv82-bvd"/><path class="yjyk2ddya"/><path class="h6as5h2ht"/><path class="mpnwbubfi"/><path class="kdumj4nzh"/>`,
		"fallback": "energy-icons:e-bike-charging-48",
	});
}

export default Component;
