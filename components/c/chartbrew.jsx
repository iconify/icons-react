import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rb5z5zncd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rb5z5zncd"/>`,
		"fallback": "selfhst:chartbrew",
	});
}

export default Component;
