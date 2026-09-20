import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kd1r2ibat.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kd1r2ibat"/>`,
		"fallback": "streamline:hotel-shower-head",
	});
}

export default Component;
