import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qb8flhcid.css';
import '../../css/d/dd0hmgdze.css';
import '../../css/j/jaycibc_p.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qb8flhcid"/><path class="dd0hmgdze"/><path class="jaycibc_p"/>`,
		"fallback": "energy-icons:biodiversity-20-bold",
	});
}

export default Component;
