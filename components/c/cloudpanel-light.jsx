import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wh_0mrb4n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wh_0mrb4n"/>`,
		"fallback": "selfhst:cloudpanel-light",
	});
}

export default Component;
