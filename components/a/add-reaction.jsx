import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rz00iwbhm.css';

const viewBox = {"width":3200,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rz00iwbhm"/>`,
		"fallback": "fluent-mdl2:add-reaction",
	});
}

export default Component;
