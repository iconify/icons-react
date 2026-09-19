import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ymicfbb2j.css';
import '../../css/r/rhba1dbhi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ymicfbb2j"/><path class="rhba1dbhi"/>`,
		"fallback": "ion:headset-outline",
	});
}

export default Component;
