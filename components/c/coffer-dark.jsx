import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dwl3inblv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dwl3inblv"/>`,
		"fallback": "selfhst:coffer-dark",
	});
}

export default Component;
