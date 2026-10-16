import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vo53krbdf.css';
import '../../css/v/vf-n7zb4c.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vo53krbdf"/><path class="vf-n7zb4c"/>`,
		"fallback": "energy-icons:ev-parking-20",
	});
}

export default Component;
