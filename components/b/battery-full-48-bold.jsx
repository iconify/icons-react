import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sjsgojboe.css';
import '../../css/f/f11gmybah.css';
import '../../css/d/dn8te6s6e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sjsgojboe"/><path class="f11gmybah"/><path class="dn8te6s6e"/>`,
		"fallback": "energy-icons:battery-full-48-bold",
	});
}

export default Component;
