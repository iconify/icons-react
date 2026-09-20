import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o053b3bvz.css';
import '../../css/b/bps76ebgq.css';
import '../../css/f/fw1xawbhh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o053b3bvz"/><path class="bps76ebgq"/><path class="fw1xawbhh"/>`,
		"fallback": "vaadin:calendar-briefcase",
	});
}

export default Component;
