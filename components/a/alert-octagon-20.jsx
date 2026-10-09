import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mrdv28bdf.css';
import '../../css/v/vceel18zg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mrdv28bdf"/><path class="vceel18zg"/>`,
		"fallback": "energy-icons:alert-octagon-20",
	});
}

export default Component;
