import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qp23nzbvs.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qp23nzbvs"/>`,
		"fallback": "entypo:drink",
	});
}

export default Component;
