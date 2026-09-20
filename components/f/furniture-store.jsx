import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q3rkygq6d.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q3rkygq6d"/>`,
		"fallback": "map:furniture-store",
	});
}

export default Component;
