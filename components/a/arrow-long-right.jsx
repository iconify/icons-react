import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rti4-ty4m.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rti4-ty4m"/>`,
		"fallback": "entypo:arrow-long-right",
	});
}

export default Component;
