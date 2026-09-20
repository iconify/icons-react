import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zev9aeikb.css';
import '../../css/v/vprbqcbbw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zev9aeikb"/><path class="vprbqcbbw"/>`,
		"fallback": "selfhst:freshrss-dark",
	});
}

export default Component;
