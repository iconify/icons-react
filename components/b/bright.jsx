import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gls42abvc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gls42abvc"/>`,
		"fallback": "ooui:bright",
	});
}

export default Component;
