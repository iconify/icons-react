import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ycfta7yog.css';
import '../../css/l/lwrzs1b5v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ycfta7yog"/><path class="lwrzs1b5v"/>`,
		"fallback": "boxicons:globe-oceania",
	});
}

export default Component;
