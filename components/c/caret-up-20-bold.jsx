import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t0lpgpb-m.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t0lpgpb-m"/>`,
		"fallback": "energy-icons:caret-up-20-bold",
	});
}

export default Component;
