import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aezfh675b.css';
import '../../css/d/d-_30k0so.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aezfh675b"/><path class="d-_30k0so"/>`,
		"fallback": "energy-icons:forecast-20-bold",
	});
}

export default Component;
