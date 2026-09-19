import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vr1sutbfj.css';
import '../../css/l/ll09ir12a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vr1sutbfj"/><path class="ll09ir12a"/>`,
		"fallback": "ion:fitness",
	});
}

export default Component;
