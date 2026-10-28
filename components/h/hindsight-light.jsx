import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/avp4ev5ig.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="avp4ev5ig"/>`,
		"fallback": "selfhst:hindsight-light",
	});
}

export default Component;
