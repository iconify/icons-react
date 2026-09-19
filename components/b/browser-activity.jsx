import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nyues-25d.css';
import '../../css/l/l2z16-nsj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nyues-25d"/><path class="l2z16-nsj"/>`,
		"fallback": "boxicons:browser-activity",
	});
}

export default Component;
