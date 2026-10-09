import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sjsgojboe.css';
import '../../css/f/f11gmybah.css';
import '../../css/v/vy8ukubtk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sjsgojboe"/><path class="f11gmybah"/><path class="vy8ukubtk"/>`,
		"fallback": "energy-icons:battery-low-48-bold",
	});
}

export default Component;
