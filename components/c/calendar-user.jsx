import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o053b3bvz.css';
import '../../css/u/u2os-ab_w.css';
import '../../css/n/n6lpwabqu.css';
import '../../css/n/n-dzcccws.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o053b3bvz"/><path class="u2os-ab_w"/><path class="n6lpwabqu"/><path class="n-dzcccws"/>`,
		"fallback": "vaadin:calendar-user",
	});
}

export default Component;
