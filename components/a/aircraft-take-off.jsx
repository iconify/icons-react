import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qv7pv6b9m.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qv7pv6b9m"/>`,
		"fallback": "entypo:aircraft-take-off",
	});
}

export default Component;
