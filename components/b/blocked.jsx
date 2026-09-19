import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lvcdiklpa.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lvcdiklpa"/>`,
		"fallback": "icomoon-free:blocked",
	});
}

export default Component;
