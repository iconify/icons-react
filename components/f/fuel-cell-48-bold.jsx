import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/whjhgpb0b.css';
import '../../css/z/zusm05f6k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="whjhgpb0b"/><path class="zusm05f6k"/>`,
		"fallback": "energy-icons:fuel-cell-48-bold",
	});
}

export default Component;
