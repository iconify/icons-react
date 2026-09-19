import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ofbr-bi5w.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ofbr-bi5w"/>`,
		"fallback": "entypo:back-in-time",
	});
}

export default Component;
