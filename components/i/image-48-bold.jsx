import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gcfuqov3g.css';
import '../../css/m/mdy5cy31n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gcfuqov3g"/><path class="mdy5cy31n"/>`,
		"fallback": "energy-icons:image-48-bold",
	});
}

export default Component;
