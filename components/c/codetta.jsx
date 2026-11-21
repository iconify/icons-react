import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jyb13_mva.css';
import '../../css/g/go7uigb4e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jyb13_mva"/><path class="go7uigb4e"/>`,
		"fallback": "selfhst:codetta",
	});
}

export default Component;
