import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yh10aeonn.css';
import '../../css/t/t08gpvbds.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yh10aeonn"/><path class="t08gpvbds"/>`,
		"fallback": "eos-icons:bootstrapping-outlined",
	});
}

export default Component;
