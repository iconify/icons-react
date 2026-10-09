import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ogowslhhc.css';
import '../../css/d/dnvyigb_c.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ogowslhhc"/><path class="dnvyigb_c"/>`,
		"fallback": "energy-icons:chart-sankey-20-bold",
	});
}

export default Component;
