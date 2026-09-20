import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sgi78ebgb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sgi78ebgb"/>`,
		"fallback": "selfhst:ford-dark",
	});
}

export default Component;
