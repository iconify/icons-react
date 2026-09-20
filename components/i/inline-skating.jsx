import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ld4osb5km.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ld4osb5km"/>`,
		"fallback": "temaki:inline-skating",
	});
}

export default Component;
