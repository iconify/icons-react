import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qw3vozd0w.css';

const viewBox = {"width":432,"height":416};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qw3vozd0w"/>`,
		"fallback": "zmdi:case-download",
	});
}

export default Component;
