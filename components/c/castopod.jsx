import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gzgwzi7wr.css';
import '../../css/s/s7ybahwbn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gzgwzi7wr"/><path class="s7ybahwbn"/>`,
		"fallback": "selfhst:castopod",
	});
}

export default Component;
